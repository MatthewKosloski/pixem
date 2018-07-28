import * as React from 'react';

interface IPropTypes {
    id?: string;
    name?: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Text extends React.PureComponent<IPropTypes, {}> {
    render() {
        return (
            <input type="text" {...this.props}/>
        );
    }
}

export default Text;