import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledHamburger from './StyledHamburger';

const State = styled.input.attrs({
	type: 'checkbox'
})`
	display: none;
	&:checked ~ div span {
		background: transparent;
	}
	&:checked ~ div span::before,
	&:checked ~ div span::after {
		top: 0;
	}
	&:checked ~ div span::before {
		transform: rotate(-45deg);
	}
	&:checked ~ div span::after {
		transform: rotate(45deg);
	}
`;

class Hamburger extends Component {

	constructor(props) {
		super(props);
		this.state = {
			ariaExpanded: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			ariaExpanded: !this.state.ariaExpanded
		});
		this.props.onClick(e);
	}

	render() {
		const { ariaControls, isMobileMenuVisible } = this.props;
		const { ariaExpanded } = this.state;
		return (
			<StyledHamburger
				role="button"
				aria-controls={ariaControls}
				aria-expanded={ariaExpanded}
				isMobileMenuVisible={isMobileMenuVisible}>
				<State onChange={this.handleClick} />
	 			<div aria-hidden="true">
	 				<span></span>
	 			</div>
			</StyledHamburger>
		);
	}

}

Hamburger.propTypes = {
	ariaControls: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isMobileMenuVisible: PropTypes.bool.isRequired
};

export default Hamburger;