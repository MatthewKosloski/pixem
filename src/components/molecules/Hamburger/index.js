import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledLabel from './StyledLabel';
import StyledCheckbox from './StyledCheckbox';

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
		const { 
			ariaControls, 
			ariaLabel,
			isMobileMenuVisible 
		} = this.props;
		const { ariaExpanded } = this.state;
		return (
			<StyledLabel
				role="button"
				aria-controls={ariaControls}
				aria-label={ariaLabel}
				aria-expanded={ariaExpanded}
				isMobileMenuVisible={isMobileMenuVisible}>
				<StyledCheckbox onChange={this.handleClick} />
				<div aria-hidden="true">
					<span></span>
				</div>
			</StyledLabel>
		);
	}

}

Hamburger.defaultProps = {
	ariaLabel: 'Toggle mobile navigation'
};

Hamburger.propTypes = {
	ariaControls: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isMobileMenuVisible: PropTypes.bool.isRequired
};

export default Hamburger;