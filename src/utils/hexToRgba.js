import hexToRgb from './hexToRgb';

/**
 * Takes a 6-character hexcode string
 * and a number (0-1) and returns an
 * rgba string of the hexcode.
 * 
 * @example
 * // returns rgba(255, 255, 255, 0.5)
 * hexToRgba('#ffffff', 0.5)
 * 
 * @param {string} hex
 * @param {number} percent
 * @returns {string}
 */
export default (hex, percent) => {
	const {r, g, b} = hexToRgb(hex);
	return `rgba(${r}, ${g}, ${b}, ${percent})`;
};