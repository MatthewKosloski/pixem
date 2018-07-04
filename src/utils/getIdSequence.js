/**
 * Takes a string and a quantity, returning a sequence
 * of strings in the specified quantity ending in numbers.
 * 
 * @example
 * // returns ["foo1", "foo2", "foo3"]
 * getIdSequence(3, "foo")
 * 
 * @param {number} quantity - How many ids to generate
 * @param {string} str - The string template
 * @return {array}
 */
const getIdSequence = (quantity, str) =>
    [...Array(quantity)].map((_, i) => `${str}${i+1}`);

export default getIdSequence;