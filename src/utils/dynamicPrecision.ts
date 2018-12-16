import isInt from './isInt';

/*
*	In the event that $num is a float,
*	return $num to the specified precision.
*	If $num is an integer, do nothing to $num.
*/
const dynamicPrecision = (num: number, precision: number = 4): number => {
	return isInt(num) 
		? num 
		: Number(num.toFixed(precision));
};

export default dynamicPrecision;
