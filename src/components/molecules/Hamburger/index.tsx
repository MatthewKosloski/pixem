import * as React from 'react';

import StyledLabel from './StyledLabel';
import StyledCheckbox from './StyledCheckbox';

interface IPropTypes {
	ariaControls: string;
	ariaLabel?: string;
	isMobileMenuVisible: boolean;
	onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IDefaultProps {
	readonly ariaLabel: string;
}

interface IState {
	ariaExpanded: boolean;
}

const Hamburger: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps, IState> {

	static defaultProps: IDefaultProps = {
		ariaLabel: 'Toggle mobile navigation'
	}

	constructor(props: IPropTypes & IDefaultProps) {
		super(props);
		this.state = this.getInitState();
		this.handleClick = this.handleClick.bind(this);
	}

	private getInitState(): IState {
		return {
			ariaExpanded: false
		};
	}

	private handleClick(e: React.ChangeEvent<HTMLInputElement>) {
		console.log('foo');
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
				<StyledCheckbox 
					checked={ariaExpanded}
					onChange={this.handleClick} />
				<div aria-hidden="true">
					<span></span>
				</div>
			</StyledLabel>
		);
	}

  }

export default Hamburger;