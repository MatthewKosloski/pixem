import React from 'react';
import styled from 'styled-components';
import { modularscalerem, vrrem } from '../../utils';
import theme from '../../theme';

const { base, ratio } = theme;

const Hero = styled('section')`
	background: linear-gradient(-45deg, 
		${({theme: { colors }}) => colors.aquamarine}, 
		${({theme: { colors }}) => colors.scienceBlue});
	text-align: center;
	color: #fff;
	padding: ${vrrem(base, ratio, 4)} 0;
	font-size: ${modularscalerem(base, ratio, 1)}
`;

export default () => (
	<Hero>
		<p>A px and (r)em unit converter for style sheets.</p>
	</Hero>
);
