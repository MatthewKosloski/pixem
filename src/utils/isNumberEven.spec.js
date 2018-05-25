import isNumberEven from './isNumberEven';

test('returns false for 1', () => {
	expect(isNumberEven(1)).toBe(false);
});

test('returns true for 2', () => {
	expect(isNumberEven(2)).toBe(true);
})