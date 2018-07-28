/**
 * Removes all semicolons from $str.
 */
export default (str: string): string => 
    str.replace(/;/g, '');