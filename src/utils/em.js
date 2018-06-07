import dynamicPrecision from './dynamicPrecision';

/*
*	Predicated on a provided base size, it
*	converts a pixel number to an em string.
*
*	@param base {Number}
*	@param px {Number}
*	@return {String}
*/

const em = (base, px) => {
	const num = dynamicPrecision(px / base);
	return `${num}em`;
};

export default em;