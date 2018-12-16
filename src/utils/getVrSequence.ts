import vr from './vr';

/**
 * Returns a sequence of vertical rhythm numbers from
 * a step of 0 to $quantity.
 */
export default (
	quantity: number, 
	base: number, 
	ratio: number
): number[] => {
	const spaces = [];

	for (let i = 0; i < quantity; i++) {
		spaces.push(vr(base, ratio, i));
	}

	return spaces;
};