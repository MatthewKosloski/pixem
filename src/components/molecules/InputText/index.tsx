import * as React from 'react';
import StyledInputText from './StyledInputText';

interface IPropTypes {
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.SFC<IPropTypes> = ({
    name, id, value, onChange
}) => {
    return (
        <StyledInputText 
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
}

export default InputText;