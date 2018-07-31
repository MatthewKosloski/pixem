import * as React from 'react';

import { Label, Checkbox } from './Styles';

interface IPropTypes {
	ariaControls: string;
	ariaLabel?: string;
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

	componentWillUnmount() {
		console.log('unmounting hamburger');
	}

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
		this.setState({
			ariaExpanded: !this.state.ariaExpanded
		});
		this.props.onClick(e);
	}

	render() {
		const { 
			ariaControls, 
			ariaLabel,
		} = this.props;
		const { ariaExpanded } = this.state;
		return (
			<Label
				role="button"
				aria-controls={ariaControls}
				aria-label={ariaLabel}
				aria-expanded={ariaExpanded}>
				<Checkbox 
					checked={ariaExpanded}
					onChange={this.handleClick} />
				<div aria-hidden="true">
					<span></span>
				</div>
			</Label>
		);
	}

  }

export default Hamburger;