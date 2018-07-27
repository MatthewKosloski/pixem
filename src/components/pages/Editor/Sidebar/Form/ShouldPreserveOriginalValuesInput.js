import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { InputCheckbox } from '../../../../molecules';

class ShouldPreserveOriginalValuesInput extends PureComponent {
    render() {
        return( 
            <InputCheckbox {...this.props} />	
        );
    }
}

ShouldPreserveOriginalValuesInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

ShouldPreserveOriginalValuesInput.defaultProps = {
    id: 'shouldPreserveOriginalValues',
    name: 'shouldPreserveOriginalValues'
};

export default ShouldPreserveOriginalValuesInput;