import * as React from 'react';
import { Flex } from 'grid-styled';

/**
 * Adding types for this component
 * is rather tedious.  See here for types: 
 * https://goo.gl/MNZBhD
 * 
 * As you consume values, just add them to the
 * interface.
 */

type GenericValue<T> = T | T[] | null;
type SpacingValue = GenericValue<string | number>;

interface IPropTypes {
	mx?: SpacingValue;
	alignItems?: 'center';
	justifyContent?: 'flex-end';
}

interface IDefaultProps {
	mx: SpacingValue;
}

const Row: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps> {

	public static defaultProps: IDefaultProps = {
		mx: -1
	};

	public render() {
		return (
			<Flex {...this.props}
				flexWrap={'wrap'}>
				{this.props.children}
			</Flex>
		);
	}
};

export default Row;
