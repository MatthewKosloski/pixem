/* eslint no-undef: "off" */
import stripWhiteSpace from './stripWhiteSpace';

describe('stripWhiteSpace()', () => {
    
    test('removes white space from string', () => {
        expect(stripWhiteSpace(`
         {
             i
             am
             a
             string
             with
             white
             space
         }
        `)).toBe('{iamastringwithwhitespace}');
    });

});