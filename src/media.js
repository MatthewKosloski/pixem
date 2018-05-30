import { css } from 'styled-components';
import theme from './theme';

const { breakpoints } = theme;

const sizes = {
	sm: breakpoints[0],
	md: breakpoints[1],
	lg: breakpoints[2]
};


// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media (min-width: ${sizes[size]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;