/**
 * Takes a 6-character hex string and returns an object 
 * containing the red, green, and blue channel values 
 * in integers between 0 and 255.
 * 
 * @example
 * // returns {r: 255, g: 255, b: 255}
 * hexToRgb('#ffffff')
 */
export default (hex: string): {r: number, g: number, b: number} => {
	const hexRegEx = /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/;
	const result = hexRegEx.exec(hex);
	
    const toHexadecimal = (str: string): number => 
        parseInt(str, 16);
	
	return {
		r: toHexadecimal(result[1]),
		g: toHexadecimal(result[2]),
		b: toHexadecimal(result[3])
	};
};
