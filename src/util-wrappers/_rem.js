import { rem } from '../utils';
import theme from '../theme';

const { base } = theme;

const _rem = step =>
	rem(base, step);

export default _rem;