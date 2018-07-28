import { em } from '../utils';
import theme from '../theme';

const { base } = theme;

export default (step: number): string =>
	em(base, step);