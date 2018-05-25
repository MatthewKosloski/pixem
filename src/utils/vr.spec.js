import vr from './vr';

describe('vr() boundary', () => {
	let base = 18, ratio = 1.3;

	test('returns a pixel value for a half step', () => {
		expect(vr(base, ratio, 0.5)).toBe(11.7);
	});

	test('returns a pixel value for one step', () => {
		expect(vr(base, ratio, 1)).toBe(23.4);
	});

	test('returns a pixel value for two steps', () => {
		expect(vr(base, ratio, 2)).toBe(46.8);
	});

});