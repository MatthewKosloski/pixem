import * as React from 'react';

import { InputText } from '@molecules';

interface IPropTypes {
    id?: string;
    name?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IDefaultProps {
    id: string;
    name: string;
}

const BaseInput: React.ComponentClass<IPropTypes> =
  class extends React.PureComponent<IPropTypes & IDefaultProps> {

    static defaultProps: IDefaultProps = {
        id: 'base',
        name: 'base'
    }

    render() {
        return( 
            <InputText 
                look="Shark" 
                {...this.props} />	
        );
    }
}

export default BaseInput;