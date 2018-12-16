import * as React from 'react';

import { Row, Column } from '@atoms';

interface IPropTypes {
	firstColumnWidths?: any[];
	secondColumnWidths?: any[];
	firstColumn: React.ReactNode;
	secondColumn: React.ReactNode;
}

interface IDefaultProps {
	firstColumnWidths: any[];
	secondColumnWidths: any[];
}

const TwoColumnTemplate: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps> {

	public static defaultProps: IDefaultProps = {
		firstColumnWidths: [1, 1, '300px'],
		secondColumnWidths: [1, 1, 'calc(100% - 300px)']
	};
	
	public render() {
		const {
			firstColumnWidths,
			secondColumnWidths,
			firstColumn,
			secondColumn
		} = this.props;

		return (
			<Row mx={0}>
				<Column 
					width={firstColumnWidths} 
					px={0}>
					{firstColumn}
				</Column>
				<Column 
					width={secondColumnWidths} 
					px={0}>
					{secondColumn}
				</Column>
			</Row>
		);
	}
};

export default TwoColumnTemplate;