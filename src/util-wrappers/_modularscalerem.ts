import { modularscalerem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

export default (step: number): string => 
	modularscalerem(base, ratio, step);