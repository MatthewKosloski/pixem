import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import { InputRadio } from '../../../../molecules';

class UnitInput extends PureComponent {
    render() {

        const {
            titles,
            values,
            unit,
            name,
            onChange
        } = this.props;

        return( 
            <Fragment>
                <InputRadio
                    title={titles[0]}
                    value={values[0]}
                    name={name}
                    checked={unit === values[0]}
                    onChange={onChange} />
                <InputRadio
                    title={titles[1]}
                    value={values[1]}
                    name={name}
                    checked={unit === values[1]}
                    onChange={onChange} />
            </Fragment>
        );
    }
}

UnitInput.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    unit: PropTypes.string.isRequired
};

UnitInput.defaultProps = {
    name: 'unit',
    titles: ['em', 'rem'],
    values: ['em', 'rem']
};

export default UnitInput;