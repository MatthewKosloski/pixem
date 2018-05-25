import vrrem from './vrrem';

describe('vrrem() boundary', () => {

	let base = 18, ratio = 1.3;

	test('returns a rem value for a half step', () => {
		expect(vrrem(base, ratio, 0.5)).toBe('0.65rem');
	});

	test('returns a rem value for one step', () => {
		expect(vrrem(base, ratio, 1)).toBe('1.3rem');
	});

	test('returns a rem value for two steps', () => {
		expect(vrrem(base, ratio, 2)).toBe('2.6rem');
	});

});