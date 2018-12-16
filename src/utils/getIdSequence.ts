/**
 * Takes a string and a quantity, returning a sequence
 * of strings in the specified quantity ending in numbers.
 * 
 * @example
 * // returns ["foo1", "foo2", "foo3"]
 * getIdSequence(3, "foo")
 */
const getIdSequence = (quantity: number, str: string): string[] => {
	const arr: string[] = [];

	for (let i = 0; i < quantity; i++) {
		arr.push(`${str}${i + 1}`);
	}

	return arr;
};

export default getIdSequence;