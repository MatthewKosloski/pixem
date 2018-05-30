import { modularscalerem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

const _modularscalerem = step => 
	modularscalerem(base, ratio, step);

export default _modularscalerem;