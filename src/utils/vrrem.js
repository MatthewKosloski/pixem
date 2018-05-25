import vr from './vr';
import rem from './rem';

/*
*	Returns a vertical rhythm value in rems.
*
*	@param base {Number} The base font-size (e.g., 18)
*	@param ratio {Number} The ratio (line-height) (e.g., 1.3)
*	@param step {Number} Steps up or down the scale
*	@return {Number} Rem value
*/
const vrrem = (base, ratio, step) =>
	rem(base, vr(base, ratio, step));

export default vrrem;