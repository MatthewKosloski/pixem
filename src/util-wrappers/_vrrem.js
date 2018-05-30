import { vrrem } from '../utils';
import theme from '../theme';

const { base, ratio } = theme;

export default step => 
	vrrem(base, ratio, step);