import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { InputText } from '../../../../molecules';

class BaseInput extends PureComponent {
    render() {
        return( 
            <InputText {...this.props} />	
        );
    }
}

BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired
};

BaseInput.defaultProps = {
    id: 'base',
    name: 'base'
};

export default BaseInput;