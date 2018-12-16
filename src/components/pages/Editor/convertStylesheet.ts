import * as valueParser from 'postcss-value-parser';

// cannot use alias because they aren't recognized by Jest
import * as utils from '../../../utils';

const pxRegex = /(([-]{0,1}[0-9]*)(\.[0-9]+)?)(px;?)/;

interface IValueParserNode {
	type:
		'word' |
		'string' |
		'div' |
		'space' |
		'comment' |
		'function';
	value: any; // predicated on type, so I use any for now
	sourceIndex: number;
}

export enum StylesheetUnit {
	em = 'em',
	rem = 'rem'
}

/**
 * Takes in a stylesheet with pixel (px)
 * values and returns a stylesheet with
 * converted values in ems or rems.
 */
export default (
	userInput: string,
	shouldPreserveOriginalValues: boolean = false,
	unit: StylesheetUnit = StylesheetUnit.em,
	base: number = 16,
	affectedProps: string[] = []
): string => {
	const parsedStylesheet = valueParser(userInput); 

	affectedProps = trimArrayItems(affectedProps);
	
	const hasAffectedProps = affectedProps.length;

	parsedStylesheet.walk((
		node: IValueParserNode, 
		index: number, 
		nodes: IValueParserNode[]
	) => {

	/*If we have affected props and this node is not an 
	affected prop, then exit. */
		if (!isAffectedPropNode(node, affectedProps)
	&& hasAffectedProps) {
		return;
	}

		// is the node a css property (e.g., "margin, padding")?
		if (isNodeCSSProperty(node, nodes[index + 1])) {
			convertCSSPropertyValueNodes(index, nodes, 
				shouldPreserveOriginalValues, unit, base);
		}

	});
	
	return valueParser.stringify(parsedStylesheet);
};

/**
 * Takes an array of strings and removes whitespace
 * from the front and back of each string in the array,
 * returning a new array of strings.
 */
const trimArrayItems = (arr: string[]): string[] => {
	return arr.map((item) => item.trim());
};

/**
 * Returns a boolean indicating if $node
 * is a CSS property (e.g., "padding:"). Looks
 * at $nextNode to make the determination.
 */
const isNodeCSSProperty = (
	node: IValueParserNode,
	nextNode: IValueParserNode 
): boolean => {
	if (nextNode === undefined) {
		return;
	}
	return node.type === 'word' && 
		nextNode.type === 'div' && 
		nextNode.value === ':';
};

/**
 * Keeps incrementing $startIndex until it finds another
 * CSS property within $nodes and returns that node; returns
 * undefined otherwise.
 */
const getNextPropertyNode = (
	startIndex: number, 
	nodes: IValueParserNode[]
): IValueParserNode => {
	while (startIndex < nodes.length) {
		const node = nodes[startIndex];
		const nextNode = nodes[startIndex + 1];
		if (isNodeCSSProperty(node, nextNode)) {
			return node;
		}
		startIndex++;
	}
};

/**
 * Returns a boolean indicating if the node's
 * value (e.g., "margin") is in the
 * array of affected properties.
 */
const isAffectedPropNode = (
	node: IValueParserNode, 
	affectedProps: string[]
): boolean => {
	const { type, value } = node;
	return type === 'word' && 
	affectedProps.indexOf(value) !== -1;
};

/**
 * Returns the node of the first value of the CSS 
 * property node whose index is $cssPropertyNodeIndex.
 * 
 * Example:
 * 
 * Given this CSS: `.foo { margin: 5px 10px; }`,
 * this function would return the node corresponding to `5px`.
 */
const getFirstCSSPropertyValueNode = (
	cssPropertyNodeIndex: number, 
	nodes: IValueParserNode[]): IValueParserNode => {
	return nodes[nodes.indexOf(nodes[cssPropertyNodeIndex + 1]) + 1];
};

/**
 * Returns the node of the last value of the CSS 
 * property node whose index is $cssPropertyNodeIndex.
 * 
 * Example:
 * 
 * Given this CSS: `.foo { margin: 5px 10px; }`,
 * this function would return the node corresponding to `10px`.
 */
const getLastCSSPropertyValueNode = (
	cssPropertyNodeIndex: number, 
	nodes: IValueParserNode[]): IValueParserNode => {

	const nextPropertyNodeIndex = nodes.indexOf(
		getNextPropertyNode(cssPropertyNodeIndex + 1, nodes));
	
	let i = nextPropertyNodeIndex === -1 
		? nodes.length - 1 
		: nextPropertyNodeIndex - 1;

	while (i > cssPropertyNodeIndex) {
		const node = nodes[i];
		if (nodeIsNumericalQuantity(node)) {
			return node;
		}
		i--;
	}

};

/**
 * Loops through all the CSS property value nodes corresponding 
 * to the CSS property whose index is $cssPropertyNodeIndex and 
 * converts those whose values are pixel values to the appropriate
 * relative unit.
 */
const convertCSSPropertyValueNodes = (
	cssPropertyNodeIndex: number, 
	nodes: IValueParserNode[],
	shouldPreserveOriginalValues: boolean,
	unit: StylesheetUnit,
	base: number): void => {

		const firstIndex = nodes.indexOf(
			getFirstCSSPropertyValueNode(cssPropertyNodeIndex, nodes));
		const lastIndex = nodes.indexOf(
			getLastCSSPropertyValueNode(cssPropertyNodeIndex, nodes));
			
		const pxValues: string[] = [];

		for (let i = firstIndex; i <= lastIndex; i++) {
			const node = nodes[i];
			const { value } = node;
			const quantity = valueParser.unit(value);

			const isPxNode = pxRegex.test(quantity.unit);

			if (nodeIsNumericalQuantity(node) && isPxNode) {
				pxValues.push(node.value);
				node.value = convertPxString(value, unit, base);
			}
		}

		if (shouldPreserveOriginalValues) {
			const commentText = utils.stripSemicolons(String(pxValues.join(' ')));
			appendCommentToNodeValue(commentText, nodes[lastIndex]);
		}
		
};

/**
 * Returns a boolean indicating if $node
 * is a number quantity (e.g., 100px, 100%);
 */
const nodeIsNumericalQuantity = (node: 
	IValueParserNode): boolean => {
	const quantity = valueParser.unit(node.value);
	return node.type === 'word' && 
	typeof quantity === 'object';
};

/**
 * Converts $px string to either an Em or Rem string
 * determined by $unit.
 */
const convertPxString = (px: string, 
	unit: StylesheetUnit, base: number): string => {
	const results = pxRegex.exec(px);
	const [, pxQuantity , , , pxLabel] = results;
	const newQuantity = utils.dynamicPrecision(
		Number(pxQuantity) / base);
	const newLabel = pxLabel.replace(/px/, unit);
	return `${newQuantity}${newLabel}`;
};

/**
 * Alters the node object's value property by appending
 * a CSS comment at the end.
 */
const appendCommentToNodeValue = (text: string, 
	node: IValueParserNode): void => {
	if (node !== undefined) {
		const comment = makeCSSComment(text);
		// only add comments for px values
		if (pxRegex.test(comment)) {
			node.value += ` ${comment}`;
		}
	}
};

/**
 * Returns a one-line CSS comment using
 * the provided string.
 */
const makeCSSComment = (
	str: string
): string => {
	return `/* ${str} */`;
};