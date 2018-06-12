import valueParser from 'postcss-value-parser';

/**
 * Walks each node within the stylesheet, performing
 * a callback on each node of type "word" that has
 * a quantity as the property value.
 * 
 * See the definition of the "word" node type here:
 * https://github.com/TrySound/postcss-value-parser#word
 * 
 * @param stylesheet {String} The stylesheet/CSS to be parsed 
 * into an object
 * @param cb {Function} Callback to run on each node. The
 * node itself, along with the number and unit of the property 
 * value is passed to the callback.
 * @return {String} The stylesheet after the modifications
 */
export default (stylesheet, cb) => {

    const parsedStylesheet = valueParser(stylesheet);

    parsedStylesheet.walk(node => {

        const quantity = valueParser.unit(node.value);

        if(
            node.type === 'word' && 
            node.hasOwnProperty('value') && 
            quantity) {
            cb(node, quantity);
        }
    });
    return parsedStylesheet.toString();
};