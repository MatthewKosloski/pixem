import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../theme';

const { colors } = theme;

const Container = styled('label')`
	div {
		position: relative;
		width: 32px;
		height: 25px;
		cursor: pointer;
		z-index: 1;
	}
	div span,
	div span::before,
	div span::after {
		background-color: ${props => props.isMobileMenuVisible 
			? colors.cadetBlue 
			: colors.white};
		transition: 0.15s ease-in-out;
		width: 100%;
		height: 4px;
		display: block;
		position: absolute;
	}
	div span {
		top: 10px;
	}
	div span::before {
		content: '';
		top: -10px;
	}
	div span::after {
		content: '';
		bottom: -10px;
	}
`;

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
			<Container
				role="button"
				aria-controls={ariaControls}
				aria-expanded={ariaExpanded}
				isMobileMenuVisible={isMobileMenuVisible}>
				<State onChange={this.handleClick} />
	 			<div aria-hidden="true">
	 				<span></span>
	 			</div>
			</Container>
		);
	}

}

Hamburger.propTypes = {
	ariaControls: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isMobileMenuVisible: PropTypes.bool.isRequired
};

export default Hamburger;