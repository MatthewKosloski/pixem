import * as React from 'react';

import * as Styles from './Styles';

type Look = 'Shark' | 'CadetBlueStroked' | 'Default';

interface IPropTypes {
    look: Look;
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.SFC<IPropTypes> = ({
    look, 
    id, 
    name, 
    value, 
    onChange
}) => {
    const element = Styles[look];
    const props = {id, name, value, onChange};
    return React.createElement(element, props);
}

InputText.defaultProps = {
    look: 'Default'
};

export default InputText;