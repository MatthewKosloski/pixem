import isNumber from './isNumber';
import stripWhiteSpace from './stripWhiteSpace';

/*
 * Returns true for positive numbers (both integers
 * and floating point).
 */
export default (str: string): boolean => {
	str = stripWhiteSpace(str);
	const isPositive = Math.sign(Number(str)) === 1;
	return isNumber(str) && isPositive;
};

/*Possible test cases in the future
console.log(isPositiveNumber('\u00A9'), false);
console.log(isPositiveNumber('-1'), false);
console.log(isPositiveNumber('0'), false);
console.log(isPositiveNumber('1'), true);
console.log(isPositiveNumber('-1.1'), false);
console.log(isPositiveNumber('0.1'), true);
console.log(isPositiveNumber('1.1'), true);
console.log(isPositiveNumber('-1f'), false);
console.log(isPositiveNumber('0f'), false);
console.log(isPositiveNumber('1f'), false);
 */