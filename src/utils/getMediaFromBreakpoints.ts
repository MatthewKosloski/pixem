interface IMedia {
	[key: string]: string;
}

/**
 * Returns an object of interpolated media query 
 * strings.  $names holds the keys and the values
 * are derived from $breakpoints.
 * 
 * @example
 * getMediaFromBreakpoints(['sm'], ['500px'])
 * // returns {sm: '(min-width: 500px)'}
 */
export default (names: string[], breakpoints: string[]): IMedia => {

	const media: IMedia = {};

	breakpoints.forEach((breakpoint, index) => {
		const key = names[index];
		media[key] = `(min-width: ${breakpoint})`;
	});

	return media;
};