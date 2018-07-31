import * as React from 'react';

import { Text } from './Styles';

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
        <Text 
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
}

export default InputText;