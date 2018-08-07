/**
 * Checks to see if the passed string
 * is a number through coercion; Returns
 * True for empty strings.
 */
export default (str: string): boolean =>
    Number(str) === Number(str);