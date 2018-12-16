/**
 * If $num is less than 10,
 * prepend a 0.
 */
export default (num: number): string =>
	`${num < 10 ? '0' : ''}${num}`;