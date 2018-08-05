import * as React from 'react';

interface IPropTypes {
    className?: string;
    id?: string;
    name?: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Checkbox extends React.PureComponent<IPropTypes, {}> {
    public render() {
        const {
            id,
            name,
            checked,
            onChange,
            className
        } = this.props;

        return (
            <input 
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                className={className}
            />
        );
    }
}

export default Checkbox;
