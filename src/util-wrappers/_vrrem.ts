import { vrrem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

export default (step: number): string  => 
	vrrem(base, ratio, step);