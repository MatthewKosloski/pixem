import dynamicPrecision from './dynamicPrecision';

/*
*	Produces a font-size (in px units) from the context
*	of a base font-size and a ratio. 
*	See http://modularscale.com/ for more information.
*
*	@param base {Number}
*	@param ratio {Number}
*	@param step {Number} A step up or down the modular scale
*	@return {Number} A font-size in pixels
*/
const modularscale = (base, ratio, step) =>
	dynamicPrecision(base * ratio**step);

export default modularscale;
