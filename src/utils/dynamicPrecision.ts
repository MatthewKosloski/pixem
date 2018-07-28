import isNumberEven from './isNumberEven';

/*
*	In the event that num is odd,
*	return a floating point number to
*	a specified level of precision.
*/
export const dynamicPrecision = (num: number, precision: number = 4): number => {
	num = Number(num);
	return isNumberEven(num) 
		? num 
		: Number(num.toFixed(precision));
};

export default dynamicPrecision;
