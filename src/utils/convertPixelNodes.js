import {
    modifyQuantityNodes,
    isPixel,
    isEm,
    em,
    rem
} from './';

/**
 * Checks to see if the unit of each
 * node (e.g., px, em, rem, %, ;)
 * returned by modifyQuantityNodes
 * is in pixels, and if so, modifies the 
 * node value with either rems or ems.
 * 
 * @param {Object}
 */
export default ({
    stylesheet,
    base,
    toUnit,
    shouldPreserveOriginalValues
}) => {
    return modifyQuantityNodes(
        stylesheet,
        (node, quantity) => {

            // quantity is an object like {number: '2', unit: 'rem'}
            
            if(isPixel(quantity.unit)) {

                const newValue = isEm(toUnit)
                    ? em(base, quantity.number)
                    : rem(base, quantity.number);

                const originalValueComment = ` /* ${
                    node.value
                } */`;

                node.value = `${newValue};${
                    shouldPreserveOriginalValues
                        ? originalValueComment
                        : ``
                }`;
            }

        }
    );
};