import rem from './rem';

describe('rem() boundary', () => {
	let base = 18;

	test('returns a rem string for a number less than the base', () => {
		expect(rem(base, 17)).toBe('0.9444rem');
	});

	test('returns a rem string for a number equal to the base', () => {
		expect(rem(base, 18)).toBe('1rem');
	});

	test('returns a rem string for a number greater than the base', () => {
		expect(rem(base, 19)).toBe('1.0556rem');
	});

});
