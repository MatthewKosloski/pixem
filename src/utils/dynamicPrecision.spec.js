import dynamicPrecision from './dynamicPrecision';

test('Default for odd numbers is a precision of 4', () => {
	expect(dynamicPrecision(3.141592)).toBe(3.1416);
});