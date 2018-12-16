/* tslint:disable:max-line-length */

import common , { IPageMeta } from './common';

interface ILabel {
	title: string;
	text: string;
}

interface IForm {
	labels: {
		[key: string]: ILabel;
	};
}

interface IEditor {
	meta: IPageMeta;
	form: IForm;
}

const editor: IEditor = {
	meta: {
		url: `${common.pathPrefix}`,
		title: 'The Pixem Editor — Pixem',
		description: 'The Pixem Editor converts px units in a style sheet to either ems or rems.'
	},
	form: {
		labels: {
			baseLabel: {
				title: 'Base Pixel Size',
				text: 'This should be the same as the root font-size on your webpage.  The default for most web browsers is 16 pixels.  This must be an integer or floating-point greater than zero.'
			},
			affectedPropsLabel: {
				title: 'Affected Properties',
				text: 'Indicate which CSS properties should be converted by typing in a list of comma-separated properties (e.g., “font, font-size”). If the field is empty, all properties will be affected by the conversion.'   
			},
			unitLabel: {
				title: 'Conversion Unit',
				text: 'Choose a unit to convert pixel values to—em or rem.  The former is relative to the font-size of the direct parent and the latter is relative to the font-size of the root element.'
			},
			shouldPreserveOriginalValuesLabel: {
				title: 'Preserve Original Values',
				text: 'Check whether to preserve original values with CSS comments.  This simply means that the original pixel value before the conversion is preserved in a comment next to the converted value.'
			}
		}
	}
};

export default editor;
