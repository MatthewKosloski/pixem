/* eslint no-undef: "off" */
import isEm from './isEm';

describe('isEm()', () => {

	test('Returns true if string is strictly equal to "em"', () => {
        expect(isEm('em')).toBeTruthy();
    });
    
    test('Returns false if string is not strictly equal to "em"', () => {
        expect(isEm('rem')).toBeFalsy();
	});

});
