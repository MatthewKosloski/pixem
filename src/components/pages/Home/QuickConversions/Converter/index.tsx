import * as React from 'react';

import { InputText } from '@molecules';

import { 
    Label, 
    InputContainer, 
    TableContainer, 
    TableColumnTitle,
    TableRows,
    TableRow,
    TableColumn,
    TableColumnItem
 } from './Styles';

interface IState {
    base: string;
    quantity: number;
}

class Converter extends React.Component<{}, IState> {

    inputId: string;

    constructor(props: {}) {
        super(props);

        this.state = {
            base: '16',
            quantity: 10
        }

        this.inputId = 'base';

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({base: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <InputContainer>
                    <Label htmlFor={this.inputId}>
                        Predicated on a base font-size of 
                            <InputText
                                look="CadetBlueStroked"
                                id={this.inputId}
                                name={this.inputId}
                                value={this.state.base}
                                onChange={this.handleChange}/> pixels.
                    </Label>
                </InputContainer>
                <TableContainer>
                    <TableRows>
                        <TableRow>
                            <TableColumn>
                                <TableColumnTitle>Pixels</TableColumnTitle>
                            </TableColumn>
                            <TableColumn>
                                <TableColumnTitle>EMs</TableColumnTitle>
                            </TableColumn>
                            <TableColumn>
                                <TableColumnTitle>Percent</TableColumnTitle>
                            </TableColumn>
                        </TableRow>
                    </TableRows>
                    <TableRows>
                        <TableRow>
                            <TableColumn>
                                <TableColumnItem>10px</TableColumnItem>
                            </TableColumn>
                            <TableColumn>
                                <TableColumnItem>05.256em</TableColumnItem>
                            </TableColumn>
                            <TableColumn>
                                <TableColumnItem>55%</TableColumnItem>
                            </TableColumn>
                        </TableRow>
                        <TableRow>
                            <TableColumn>
                                <TableColumnItem>10px</TableColumnItem>
                            </TableColumn>
                            <TableColumn>
                                <TableColumnItem>10px</TableColumnItem>
                            </TableColumn>
                            <TableColumn>
                                <TableColumnItem>55%</TableColumnItem>
                            </TableColumn>
                        </TableRow>
                    </TableRows>
                </TableContainer>
            </React.Fragment>
        );
    }

}

export default Converter;