import * as React from 'react';
import { Container as RebassContainer } from 'rebass';
import styled, { css } from 'styled-components';

interface IPropTypes {
	size?: string;
	theme?: { containerWidths: string[]; };
}

const StyledContainer = styled(RebassContainer)<IPropTypes>`${
	({size, theme: {containerWidths}}) => css`
		max-width: ${containerWidths[size]};
	`
}`;

StyledContainer.defaultProps = {
	size: 'default',
};

const Container: React.SFC<IPropTypes> = (props) => {
	return (
		<StyledContainer {...props}
		px={1}/>
	);
};

export default Container;
