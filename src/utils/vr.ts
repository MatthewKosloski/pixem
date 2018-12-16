import dynamicPrecision from './dynamicPrecision';

/*
*	Returns a pixel value that is
*	a multiple of the ratio. Use
*	this to add spacing between lines
*	of text (line-height) and spacing
*	between elements (margin/padding).
*/
const vr = (base: number, ratio: number, step: number): number =>
	dynamicPrecision((base * ratio) * step);

export default vr;