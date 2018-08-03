import modularscale from './modularscale';

/**
 * Returns a sequence of modularscale numbers from
 * a step of 0 to $quantity.
 */
export default (
	quantity: number, 
	base: number, 
	ratio: number
): number[] => {
	let sequence = [];

	for(let i = 0; i < quantity; i++) {
		sequence.push(modularscale(base, ratio, i));
	}

	return sequence;
}