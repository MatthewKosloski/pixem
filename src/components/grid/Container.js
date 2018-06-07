import React from 'react';
import { Container } from 'rebass';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
	max-width: ${({small, theme: {containerWidths}}) => small 
		? containerWidths.small 
		: containerWidths.large};
`;

export default (props) => (
	<StyledContainer {...props}
		px={1}/>
);