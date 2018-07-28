import { vrem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

export default (step: number): string => 
	vrem(base, ratio, step);