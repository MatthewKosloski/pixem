import { vrrem, modularscalerem } from './utils';

const base = 18; // base font-size
const ratio = 1.3; // line-height

const containerWidths = {
	default: '768px',
	small: '500px',
	large: '1200px',
	full: '100%'
};

const breakpoints = [
	'500px', 
	'768px', 
	'1000px'
];

const [ sm, md, lg ] = breakpoints;

const media = {
    sm: `(min-width: ${sm})`,
    md: `(min-width: ${md})`,
    lg: `(min-width: ${lg})`
};

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
	darkShark: '#212329',
	mystic: '#E9ECF3',
	shuttleGray: '#656C7C',
	cadetBlue: '#B4BAC8',
	scienceBlue: '#0049D6',
	porcelain: '#E9EDED',
	springWood: '#f8f8f0',
	bilobaFlower: '#C792EA',
	malibu: '#82B1FF',
	froly: '#F77669',
	yellowGreen: '#C3E88D',
	goldenTainoi: '#FFCB6B',
	wildWatermelon: '#ff5370',
	mandy: '#EC5F67'
};

export default {
	base,
	ratio,
	containerWidths,
	breakpoints,
	media,
	space,
	fontSizes,
	fonts,
	colors
};