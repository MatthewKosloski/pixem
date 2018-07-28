import { rem } from '../utils';
import theme from '../theme';

const { base } = theme;

export default (step: number): string =>
	rem(base, step);