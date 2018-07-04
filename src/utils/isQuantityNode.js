/**
  * Returns a boolean indicating if the
  * provided node is a word, has a value
  * property, and has a quantity.
  * 
  * @param node {Object}
  * @param quantity {Object} An object with
  * number and unit keys. See docs here: 
  * https://goo.gl/AWzZoC
  * @return {Boolean}
  */
 export default (node, quantity) =>
    node.type === 'word' && 
    node.hasOwnProperty('value') && 
    quantity;