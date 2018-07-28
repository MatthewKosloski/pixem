import vr from './vr';
import em from './em';

/*
*	Returns a vertical rhythm value in ems.
*/
const vrem = (base: number, ratio: number, step: number): string =>
	em(base, vr(base, ratio, step));

export default vrem;