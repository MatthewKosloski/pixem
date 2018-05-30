import { modularscalerem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

export default step => 
	modularscalerem(base, ratio, step);