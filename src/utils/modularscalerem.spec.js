import modularscalerem from './modularscalerem';

describe('modularscalerem() boundary', () => {
	let base = 18, ratio = 1.3;

	test('returns a rem value from a half step', () => {
		expect(modularscalerem(base, ratio, 0.5)).toBe('1.1402rem');
	});

	test('returns a rem value from one step', () => {
		expect(modularscalerem(base, ratio, 1)).toBe('1.3rem');
	});

	test('returns a rem value from two steps', () => {
		expect(modularscalerem(base, ratio, 2)).toBe('1.69rem');
	});
});