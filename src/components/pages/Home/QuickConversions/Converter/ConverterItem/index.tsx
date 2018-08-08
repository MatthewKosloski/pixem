import * as React from 'react';
import * as random from 'randomstring';

import { 
    TableRow,
    TableColumn,
    TableColumnItem
 } from '../Styles';

interface IPropTypes {
    pixels: string;
    ems: string;
    percent: string;
}

const ConverterItem: React.SFC<IPropTypes> = ({
    pixels, 
    ems, 
    percent
}) => {
    return (
        <TableRow key={random.generate()}>
            <TableColumn>
                <TableColumnItem>
                    {pixels}
                </TableColumnItem>
            </TableColumn>
            <TableColumn>
                <TableColumnItem>
                    {ems}
                </TableColumnItem>
            </TableColumn>
            <TableColumn>
                <TableColumnItem>
                    {percent}
                </TableColumnItem>
            </TableColumn>
        </TableRow>
    );
}

export default ConverterItem;