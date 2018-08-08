import * as React from 'react';

import { em, dynamicPrecision, isNumber, isNotEmptyString } from '@utils';
import { InputText, Button } from '@molecules';

import ConverterItem from './ConverterItem';

import { 
    Label, 
    InputContainer, 
    TableContainer, 
    TableColumnTitle,
    TableRows,
    TableRow,
    TableColumn,
    ButtonContainer
 } from './Styles';

interface IState {
    base: string;
    quantity: number;
}

class Converter extends React.Component<{}, IState> {

    inputId: string;
    startingPixelSize: number;

    constructor(props: {}) {
        super(props);

        this.state = {
            base: '16',
            quantity: 5
        }

        this.inputId = 'base';
        this.startingPixelSize = 10;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handeBtnClick = this.handeBtnClick.bind(this);
    }

    private handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        if(this.isValidValue(value)) {
            this.setState({base: value});
        }
    }

    private isValidValue(value: string): boolean {
        return isNumber(value);
    }

    private handeBtnClick(e: React.MouseEvent<HTMLElement>): void {
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    private renderItems(
        quantity: number, 
        base: string, 
        startingPixelSize: number
    ): React.ReactNode[] {

        if(isNotEmptyString(base)) {
            let items: React.ReactNode[] = [];
            for(let i = 0; i < quantity; i++) {
    
                const pixelsNum: number = startingPixelSize + i;
                const pixelsStr: string = `${pixelsNum}px`;
    
                const emsStr: string = em(Number(base), pixelsNum);
    
                const percentNum: number = dynamicPrecision(
                    (pixelsNum / Number(base)) * 100);
                const percentStr: string = `${percentNum}%`;
                    
                items.push(ConverterItem({
                    pixels: pixelsStr,
                    ems: emsStr,
                    percent: percentStr
                }))
            }
    
            return items;
        } else {
            return null;
        }
    }

    public render() {
        const { quantity, base } = this.state;
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
                                onChange={this.handleInputChange}/> pixels.
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
                        {this.renderItems(quantity, base, this.startingPixelSize)}
                    </TableRows>
                    <ButtonContainer>
                        <Button
                            look="Shakespeare" 
                            text="Load More" 
                            onClick={this.handeBtnClick} />    
                    </ButtonContainer>
                </TableContainer>
            </React.Fragment>
        );
    }
}

export default Converter;