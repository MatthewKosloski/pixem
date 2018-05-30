import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Hamburger } from '../../ui';

import StyledContainer from './StyledContainer';
import Menu from './Menu';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isMobileMenuVisible: false,
			viewportWidth: window.innerWidth
		};
		this.onHamburgerClick = this.onHamburgerClick.bind(this);
		this.onResize = this.onResize.bind(this);
	}

	onHamburgerClick(e) {
		this.setState({
			isMobileMenuVisible: !this.state.isMobileMenuVisible
		});
	}

	onResize() {
		this.setState({
			viewportWidth: window.innerWidth
		});
	}	

	componentDidMount() {
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize);
	}

	render() {
		const { items } = this.props;
		const { viewportWidth, isMobileMenuVisible } = this.state;

		const isMobile = viewportWidth <= 500;

		const id = 'navigation';

		return (
			<StyledContainer>
				{isMobile && <Hamburger 
					ariaControls={id}
					onClick={this.onHamburgerClick}
					isMobileMenuVisible={isMobileMenuVisible} />}
				<Menu 
					isMobileMenuVisible={isMobileMenuVisible}
					isMobile={isMobile} 
					items={items}
					id={id} />
			</StyledContainer>
		);
	}
}

Nav.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string
	})).isRequired
};

export default Nav;