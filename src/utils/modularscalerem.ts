import modularscale from './modularscale';
import rem from './rem';

/*
*	Returns a modular scale value in rems.
*/
const modularscalerem = (
	base: number, 
	ratio: number, 
	step: number
): string => 
	rem(base, modularscale(base, ratio, step));

export default modularscalerem;