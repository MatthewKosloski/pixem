import styled, { css } from 'styled-components';

export const Container = styled('div')`${
    ({theme: {
        media: {md}
    }}) => css`
        width: 100%;
        height: 100vh;
        overflow: auto;
        overflow-x: hidden;
        @media ${md} {
            width: calc(100vw - 300px);
            height: 100vh;
            overflow: auto;
        }
    `
}`;