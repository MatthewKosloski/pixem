import dynamicPrecision from './dynamicPrecision';

/*
*	Predicated on a provided base size, it
*	converts a pixel number to a rem string.
*
*	@param base {Number}
*	@param px {Number}
*	@return {String}
*/

const rem = (base, px) => {
	const num = dynamicPrecision(px / base);
	return `${num}rem`;
};

export default rem;