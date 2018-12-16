import * as React from 'react';

import { Anchor } from '@atoms';
import { common } from '@data';

import { Container } from './Styles';

export interface IPropTypes {
	isMobile?: boolean;
}

interface IDefaultProps {
	isMobile: boolean;
}

const { pathPrefix, siteName } = common;

const Title: React.ComponentClass<IPropTypes> =
  class extends React.PureComponent<IPropTypes & IDefaultProps> {

	public static defaultProps: IDefaultProps = {
		isMobile: false
	};

	public render() {
		return (
			<Container {...this.props}>
				<Anchor 
					text={siteName}
					href={pathPrefix}/>
			</Container>
		);
	}
};

export default Title;