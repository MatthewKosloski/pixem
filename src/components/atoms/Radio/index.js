import React, { PureComponent } from 'react';

class Radio extends PureComponent {
    render() {
        return (
            <input type="radio" {...this.props}/>
        );
    }
}

export default Radio;