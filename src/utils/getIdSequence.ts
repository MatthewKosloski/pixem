/**
 * Takes a string and a quantity, returning a sequence
 * of strings in the specified quantity ending in numbers.
 * 
 * @example
 * // returns ["foo1", "foo2", "foo3"]
 * getIdSequence(3, "foo")
 */
const getIdSequence = (quantity: number, str: string): string[] =>
    [...Array(quantity)].map((_, i) => `${str}${i+1}`);

export default getIdSequence;