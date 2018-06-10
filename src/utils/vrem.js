import vr from './vr';
import em from './em';

/*
*	Returns a vertical rhythm value in ems.
*
*	@param base {Number} The base font-size (e.g., 18)
*	@param ratio {Number} The ratio (line-height) (e.g., 1.3)
*	@param step {Number} Steps up or down the scale
*	@return {Number} Em value
*/
const vrem = (base, ratio, step) =>
	em(base, vr(base, ratio, step));

export default vrem;