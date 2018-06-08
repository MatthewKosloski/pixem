import React from 'react';
import { Container } from 'rebass';
import styled, { css } from 'styled-components';

const StyledContainer = styled(Container)`${
	({small, theme: {containerWidths}}) => css`
		max-width: ${small ? containerWidths.small : containerWidths.large};
	`
}`;

export default (props) => (
	<StyledContainer {...props}
		px={1}/>
);