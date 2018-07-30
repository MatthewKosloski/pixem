import * as React from 'react';
import * as random from 'randomstring';
import styled from 'styled-components';

import { _vrrem } from '@util-wrappers';

import StyledRadio from './StyledRadio';
import StyledRadioLabel from './StyledRadioLabel';

const StyledContainer = styled('div')`
    display: inline-block;
    margin-right: ${_vrrem(1)};
`;

interface IPropTypes {
    title: string;
    name: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IState {
    readonly id: string;
}

class InputRadio extends React.PureComponent<IPropTypes, IState> {
    
    constructor(props: IPropTypes) {
        super(props);
        this.state = {
            id: random.generate()
        };
    }

    render() {
        const {title, name, value, checked, onChange} = this.props;
        const { id } = this.state;
        return (
            <StyledContainer>
                <StyledRadio 
                    id={id}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                <StyledRadioLabel 
                    htmlFor={id}>
                    {title}
                </StyledRadioLabel>
            </StyledContainer>
        );
    }

}

export default InputRadio;