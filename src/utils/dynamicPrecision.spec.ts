import dynamicPrecision from './dynamicPrecision';

test(`If argument is an int, do nothing`, () => {
	expect(dynamicPrecision(6)).toBe(6);
});

test(`If argument is a float, set to default precision of 4.`, () => {
	expect(dynamicPrecision(3.141592)).toBe(3.1416);
});

test(`Accepts a precision argument`, () => {
	expect(dynamicPrecision(3.141592, 2)).toBe(3.14);
});
