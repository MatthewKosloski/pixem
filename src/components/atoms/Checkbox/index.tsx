import * as React from 'react';

interface IPropTypes {
    id?: string;
    name?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Checkbox extends React.PureComponent<IPropTypes, {}> {
    render() {
        return (
            <input type="checkbox" {...this.props}/>
        );
    }
}

export default Checkbox;