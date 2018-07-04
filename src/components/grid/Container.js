import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'rebass';
import styled, { css } from 'styled-components';

import theme from '../../theme';

const StyledContainer = styled(Container)`${
	({size, theme: {containerWidths}}) => css`
		max-width: ${containerWidths[size]};
	`
}`;

StyledContainer.defaultProps = {
	size: 'default'
};

StyledContainer.propTypes = {
	size: PropTypes.oneOf(Object.keys(
		theme.containerWidths))
};

export default (props) => (
	<StyledContainer {...props}
		px={1}/>
);