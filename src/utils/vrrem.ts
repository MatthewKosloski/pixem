import vr from './vr';
import rem from './rem';

/*
*	Returns a vertical rhythm value in rems.
*/
const vrrem = (base: number, ratio: number, step: number): string =>
	rem(base, vr(base, ratio, step));

export default vrrem;