import { vrrem, modularscalerem } from './utils';

const base = 18; // base font-size
const ratio = 1.3; // line-height

const containerWidths = {
	small: '500px',
	large: '768px'
};

const breakpoints = ['500px', '768px', '1000px'];

const space = [...Array(10)].map((_, i) => 
		vrrem(base, ratio, i));

const fontSizes = [...Array(10)].map((_, i) => 
		modularscalerem(base, ratio, i));

const fonts = {
	sans: 'Open Sans, sans-serif'
};

const colors = {
	black: '#000',
	white: '#fff',
	aquamarine: '#53FFAB',
	shakespeare: '#4CACCD',
	shark: '#292C33',
	mystic: '#E9ECF3',
	shuttleGray: '#656C7C',
	cadetBlue: '#B4BAC8',
	scienceBlue: '#0049D6'
};

export default {
	base,
	ratio,
	containerWidths,
	breakpoints,
	space,
	fontSizes,
	fonts,
	colors
};