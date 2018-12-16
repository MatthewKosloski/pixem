import * as React from 'react';

import { Container, Link } from './Styles';

import { IAnchorPropTypes } from '../../../../../atoms/Anchor';

const NavLink: React.SFC<IAnchorPropTypes> = ({text, ...rest}) => {
	return (
		<Container>
			<Link
				text={text}
				{...rest}/>
		</Container>
	);
};

export default NavLink;