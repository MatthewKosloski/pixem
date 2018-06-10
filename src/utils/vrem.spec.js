/* eslint no-undef: "off" */
import vrem from './vrem';

describe('vrem() boundary', () => {

	let base = 18, ratio = 1.3;

	test('returns a rem value for a half step', () => {
		expect(vrem(base, ratio, 0.5)).toBe('0.65em');
	});

	test('returns a rem value for one step', () => {
		expect(vrem(base, ratio, 1)).toBe('1.3em');
	});

	test('returns a rem value for two steps', () => {
		expect(vrem(base, ratio, 2)).toBe('2.6em');
	});

});