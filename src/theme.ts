import { 
	getMediaFromBreakpoints, 
	getVrSequence, 
	getModularscaleSequence
} from '@utils';

import { Theme as IRebassTheme } from 'rebass';

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

const media = getMediaFromBreakpoints(
	['sm', 'md', 'lg'], 
	breakpoints);

const space = getVrSequence(10, base, ratio);

const fontSizes = getModularscaleSequence(10, base, ratio);

const fonts = {
	sans: 'Open Sans, sans-serif'
};

const colors = {
	black: '#000000',
	white: '#ffffff',
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
	mandy: '#EC5F67',
	mako: '#434854'
};

interface ITheme {
	base: number;
	ratio: number;
	breakpoints: string[];
	containerWidths: { [key: string]: string; }
	media: { [key: string]: string; }
	colors: { [key: string]: string; }
}

const theme: IRebassTheme & ITheme = {
	base,
	ratio,
	containerWidths,
	breakpoints,
	media,
	fonts,
	space,
	fontSizes,
	colors
};

export default theme;