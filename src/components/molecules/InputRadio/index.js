import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import random from 'randomstring';
import styled from 'styled-components';

import { _vrrem } from '../../../util-wrappers';

import StyledRadio from './StyledRadio';
import StyledRadioLabel from './StyledRadioLabel';

const StyledContainer = styled('div')`
    display: inline-block;
    margin-right: ${_vrrem(1)};
`;

class InputRadio extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            id: random.generate()
        };
    }

    componentDidUpdate() {
        console.log('InputRadio update');
    }

    render() {
        const {title, name, value, checked, onChange} = this.props;
        const { id } = this.state;
        return (
            <StyledContainer>
                <StyledRadio 
                    id={id}
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                <StyledRadioLabel 
                    htmlFor={id}>
                    {title}
                </StyledRadioLabel>
            </StyledContainer>
        );
    }

}

InputRadio.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputRadio;