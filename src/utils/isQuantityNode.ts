/**
  * Returns a boolean indicating if the
  * provided node is a word, has a value
  * property, and has a quantity.
  */
 export default (node: any, quantity: any): boolean =>
  node.type === 'word' && 
  node.hasOwnProperty('value') && 
  quantity;