/* eslint no-undef: "off" */
import convertPixelNodes from './convertPixelNodes';

import { stripWhiteSpace } from './';

/**
 * Returns an object to be passed to
 * convertPixelNodes.
 * 
 * @param overrides {Object}
 */
const getArgForTest = (overrides = {}) => {

    const stylesheet = `
        .foo { 
            font-size: 32px;
            text-align: center;
            width: 100%; 
        }
    `;

    const base = '16';

    const toUnit = 'em';

    const shouldPreserveOriginalValues = true;
        
    const defaults = {
        stylesheet,
        base,
        toUnit,
        shouldPreserveOriginalValues
    };

	return Object.assign(defaults, overrides);
};

describe('convertPixelNodes()', () => {

    test('Preserves original values', () => {
        const result = convertPixelNodes(getArgForTest());
        
        expect(stripWhiteSpace(result))
        .toBe(`.foo{font-size:2em;/*32px;*/text-align:center;width:100%;}`);
    });

    test('Converts pixels to rems', () => {
        const result = convertPixelNodes(getArgForTest({
            toUnit: 'rem',
            shouldPreserveOriginalValues: false
        }));

        expect(stripWhiteSpace(result))
        .toBe(`.foo{font-size:2rem;text-align:center;width:100%;}`);
    });


});