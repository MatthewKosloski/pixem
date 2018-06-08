/* eslint no-undef: "off" */
import em from './em';

describe('em() boundary', () => {
	let base = 18;

	test('returns a rem string for a number less than the base', () => {
		expect(em(base, 17)).toBe('0.9444em');
	});

	test('returns a em string for a number equal to the base', () => {
		expect(em(base, 18)).toBe('1em');
	});

	test('returns a em string for a number greater than the base', () => {
		expect(em(base, 19)).toBe('1.0556em');
	});

});