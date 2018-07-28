import dynamicPrecision from './dynamicPrecision';

/*
*	Predicated on a provided base size, it
*	converts a pixel number to an em string.
*/
const em = (base: number, px: number): string => {
	const num = dynamicPrecision(px / base);
	return `${num}em`;
};

export default em;