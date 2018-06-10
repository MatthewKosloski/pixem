import { vrem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

export default step => 
	vrem(base, ratio, step);