import * as React from 'react';

import { CheckboxIcon } from '@atoms';

import StyledContainer from './StyledContainer';
import StyledCheckbox from './StyledCheckbox';
import StyledCheckboxLabel from './StyledCheckboxLabel';

interface IPropTypes {
    id: string;
    name: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class InputCheckbox extends React.PureComponent<IPropTypes, {}> {
    render() {
        const { id, name, checked, onChange } = this.props;
        return (
            <StyledContainer>
                <StyledCheckbox 
                    name={name}
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                <StyledCheckboxLabel htmlFor={id}>
                    <CheckboxIcon />
                </StyledCheckboxLabel>
            </StyledContainer>
        );
    }
}

export default InputCheckbox;