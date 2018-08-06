import * as React from 'react';
import { Box } from 'grid-styled';

/**
 * Adding types for this component
 * is rather tedious.  See here for types:
 * https://goo.gl/MNZBhD
 *
 * As you consume values, just add them to the
 * interface.
 */

type GenericValue<T> = T | T[] | null;
type WidthValue = GenericValue<string | number>;
type SpacingValue = GenericValue<string | number>;
type OrderValue = GenericValue<number>;

interface IPropTypes {
	width?: WidthValue;
	px?: SpacingValue;
	py?: SpacingValue;
	alignItems?: 'center';
	justifyContent?: 'flex-end';
	order?: OrderValue;
}

interface IDefaultProps {
	px: WidthValue;
}

const Column: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps> {

	public static defaultProps: IDefaultProps = {
		px: 1,
	};

	public render() {
		return (
			<Box {...this.props}>
				{this.props.children}
			</Box>
		);
	}
};

export default Column;
