import React from 'react';
import PropTypes from 'prop-types';

import StyledMobileMenu from './StyledMobileMenu';
import StyledDesktopMenu from './StyledDesktopMenu';

const Menu = ({items, isMobileMenuVisible, isMobile, id}) => {

	const renderMenuItem = (item, key) => (
		<li key={key}>
			<a href={item.link}>{item.text}</a>
		</li>
	);

	const props = { id };
	const children = <ul>{items.map(renderMenuItem)}</ul>;

	return React.createElement(
		isMobile ? StyledMobileMenu : StyledDesktopMenu,
		isMobile ? {
			...props,
			isMobileMenuVisible
		} : props,
		children
	);
};

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string
	})).isRequired,
	isMobileMenuVisible: PropTypes.bool.isRequired,
	isMobile: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired
};

export default Menu;