import * as React from 'react';

import { InputCheckbox } from '@molecules';

interface IPropTypes {
    id?: string;
    name?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IDefaultProps {
    id: string;
    name: string;
}

const ShouldPreserveOriginalValuesInput: React.ComponentClass<IPropTypes> =
  class extends React.PureComponent<IPropTypes & IDefaultProps> {

    static defaultProps: IDefaultProps = {
        id: 'shouldPreserveOriginalValues',
        name: 'shouldPreserveOriginalValues'
    }

    render() {
        return( 
            <InputCheckbox {...this.props} />	
        );
    }
}

export default ShouldPreserveOriginalValuesInput;