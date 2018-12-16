import dynamicPrecision from './dynamicPrecision';

/*
*	Produces a font-size (in px units) from the context
*	of a base font-size and a ratio.
*	See http://modularscale.com/ for more information.
*/
const modularscale = (base: number, ratio: number, step: number): number =>
	dynamicPrecision(base * Math.pow(ratio, step));

export default modularscale;
