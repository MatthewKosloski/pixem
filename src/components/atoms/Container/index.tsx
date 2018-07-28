import * as React from 'react';
import { Container } from 'rebass';
import styled, { css } from 'styled-components';

interface IStyledContainerProps {
	size: string;
	theme: { containerWidths: string[]; };
	px: number;
}

const StyledContainer = styled(Container)<IStyledContainerProps>`${
	({size, theme: {containerWidths}}) => css`
		max-width: ${containerWidths[size]};
	`
}`;

StyledContainer.defaultProps = {
	size: 'default'
};

const Component: React.SFC<{}> = (props) => {
	return (
		<StyledContainer {...props}
		px={1}/>
	);
}

export default Component;