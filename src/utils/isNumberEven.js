/*
*	Takes a number argument and returns
*	a boolean indicating if it is even.
*	
*	@param num {Number}
*	@return {Boolean}
*/
const isNumberEven = num => {
	num = Number(num);
	return num % 2 === 0;
};

export default isNumberEven;