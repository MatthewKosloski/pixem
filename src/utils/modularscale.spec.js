/* eslint no-undef: "off" */
import modularscale from './modularscale';

describe.only('modularscale() boundary', () => {

	let base = 18, ratio = 1.3;

	test('returns a pixel font-size from a half step up', () => {
		expect(modularscale(base, ratio, 0.5)).toBe(20.5232);
	});

	test('returns a pixel font-size from one step up', () => {
		expect(modularscale(base, ratio, 1)).toBe(23.4);
	});

	test('returns a pixel font-size from two steps up', () => {
		expect(modularscale(base, ratio, 2)).toBe(30.42);
	});


});