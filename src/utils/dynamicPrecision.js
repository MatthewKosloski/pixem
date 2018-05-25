import isNumberEven from './isNumberEven';

/*
*	In the event that num is odd,
*	return a floating point number to
*	a specified level of precision.
*
*	@param num {Number}
*	@param precision {Number}
*	@return {Number}
*/
export const dynamicPrecision = (num, precision = 4) => {
	num = Number(num);
	return isNumberEven(num) 
		? num 
		: Number(num.toFixed(precision));
};

export default dynamicPrecision;
