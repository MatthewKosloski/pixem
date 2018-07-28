import hexToRgb from './hexToRgb';

/**
 * Takes a 6-character hexcode string
 * and a number (0-1) and returns an
 * rgba string of the hexcode.
 * 
 * @example
 * // returns rgba(255, 255, 255, 0.5)
 * hexToRgba('#ffffff', 0.5)
 */
export default (hex: string, percent: number): string => {
	const {r, g, b} = hexToRgb(hex);
	return `rgba(${r}, ${g}, ${b}, ${percent})`;
};