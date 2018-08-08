import styled, { css } from 'styled-components';

import { Heading3 } from '@atoms';
import { _rem, _vrrem } from '@util-wrappers';

export const Container = styled('div')`${
    () => css`
        padding-left: ${_vrrem(2)};
        padding-bottom: ${_vrrem(2)};
    `
}`;

export const Title = styled(Heading3)`${
 ({theme: {
     colors: {shuttleGray, shakespeare}
 }}) => css`
    color: ${shuttleGray};
    font-size: ${_rem(18)};
    margin-bottom: ${_vrrem(0.5)};
    position: relative;
    &::before {
        content: attr(data-number);
        position: absolute;
        left: -${_vrrem(2)};
        color: ${shakespeare};
    }
 `
}`;

export const Paragraph = styled('p')`${
    ({theme: {
        colors: {shuttleGray}
    }}) => css`
       color: ${shuttleGray};
       font-size: ${_rem(16)};
    `
   }`;