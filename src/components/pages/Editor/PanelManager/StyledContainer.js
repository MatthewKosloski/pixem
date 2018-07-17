import styled, { css } from 'styled-components';

export default styled('div')`${
    ({isMobile}) => css`
        display: flex;
        flex-direction: ${isMobile ? 'column' : 'row'};
        height: 100vh;
    `
}`;