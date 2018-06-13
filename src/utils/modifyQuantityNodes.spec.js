/* eslint no-undef: "off" */
import modifyQuantityNodes from './modifyQuantityNodes';

describe('modifyQuantityNodes()', () => {

    test('Recognizes quantity nodes', () => {

        const stylesheet = `
            .foo {
                font-size: 32px; // quantity node
                text-align: center;
                width: 50%; // quantity node
            }
        `;
    
        const spy = jest.fn();
    
        modifyQuantityNodes(stylesheet, spy);
    
        expect(spy.mock.calls.length).toBe(2);
    
    });

});
