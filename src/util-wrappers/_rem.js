import { rem } from '../utils';
import theme from '../theme';

const { base } = theme;

export default step =>
	rem(base, step);