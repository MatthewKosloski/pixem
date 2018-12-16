import * as React from 'react';

import { Label, Checkbox } from './Styles';

import theme from '@src/theme';

const { shakespeare } = theme.colors;

interface IPropTypes {
	ariaControls: string;
	ariaLabel?: string;
	openColor?: string;
	closeColor?: string;
	onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IDefaultProps {
	readonly ariaLabel: string;
	readonly openColor: string;
	readonly closeColor: string;
}

interface IState {
	ariaExpanded: boolean;
}

const Hamburger: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps, IState> {

	public static defaultProps: IDefaultProps = {
		ariaLabel: 'Toggle mobile navigation',
		openColor: shakespeare,
		closeColor: shakespeare
	};

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

	public render() {
		const { 
			ariaControls, 
			ariaLabel,
			openColor,
			closeColor
		} = this.props;
		const { ariaExpanded } = this.state;
		return (
			<Label
				role="button"
				aria-controls={ariaControls}
				aria-label={ariaLabel}
				aria-expanded={ariaExpanded}
				openColor={openColor}>
				<Checkbox 
					checked={ariaExpanded}
					onChange={this.handleClick}
					closeColor={closeColor} />
				<div aria-hidden="true">
					<span></span>
				</div>
			</Label>
		);
	}

  };

export default Hamburger;