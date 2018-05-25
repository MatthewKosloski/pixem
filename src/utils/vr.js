import dynamicPrecision from './dynamicPrecision';

/*
*	Returns a pixel value that is
*	a multiple of the ratio. Use
*	this to add spacing between lines
*	of text (line-height) and spacing
*	between elements (margin/padding).
*	
*	@param base {Number} The base font-size (e.g., 18)
*	@param ratio {Number} The ratio (line-height) (e.g., 1.3)
*	@param step {Number} Steps up or down the scale
*	@return {Number} Pixel value
*/
const vr = (base, ratio, step) => 
	dynamicPrecision((base * ratio) * step);

export default vr;