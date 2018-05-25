import modularscale from './modularscale';
import rem from './rem';

/*
*	Returns a modular scale value in rems.
*
*	@param base {Number}
*	@param ratio {Number}
*	@param step {Number} A step up or down the modular scale
*	@return {Number} A font-size in rems
*/
const modularscalerem = (base, ratio, step) => 
	rem(base, modularscale(base, ratio, step));

export default modularscalerem;