import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends PureComponent {

    componentDidUpdate() {
        console.log('Checkbox update', this.props);
    }

    render() {
        return (
            <input type="checkbox" {...this.props}/>
        );
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default Checkbox;