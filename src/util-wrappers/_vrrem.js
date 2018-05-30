import { vrrem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

const _vrrem = step => 
	vrrem(base, ratio, step);

export default _vrrem;