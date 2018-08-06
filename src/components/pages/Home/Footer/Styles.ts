import styled, { css } from 'styled-components';
import { _rem, _vrrem } from '@util-wrappers';

export const Footer = styled('footer')`${
   ({theme: {
       colors: {shakespeare, shuttleGray}
   }}) => css`
           color: ${shuttleGray};
           font-size: ${_rem(14)};
           padding-bottom: ${_vrrem(1.5)};

           a {
               color: ${shakespeare};
           }
   `
}`;