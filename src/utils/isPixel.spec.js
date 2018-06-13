/* eslint no-undef: "off" */
import isPixel from './isPixel';

describe('isPixel()', () => {

	test('Returns true if string matches /px/', () => {
		expect(isPixel('45px;')).toBeTruthy();
		expect(isPixel('55 px')).toBeTruthy();
	});

	test('Returns false if string does not match /px/', () => {
		expect(isPixel('45p;')).toBeFalsy();
        expect(isPixel('55 p')).toBeFalsy();
	});

});
