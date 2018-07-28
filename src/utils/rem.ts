import dynamicPrecision from './dynamicPrecision';

/*
*	Predicated on a provided base size, it
*	converts a pixel number to a rem string.
*/

const rem = (base: number, px: number): string => {
	const num = dynamicPrecision(px / base);
	return `${num}rem`;
};

export default rem;