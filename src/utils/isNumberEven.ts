/*
*	Takes a number argument and returns
*	a boolean indicating if it is even.
*/
const isNumberEven = (num: number): boolean => {
	num = Number(num);
	return num % 2 === 0;
};

export default isNumberEven;