import React from 'react';
import PropTypes from 'prop-types';

import StyledPanel from './StyledPanel';

const Panel = ({id, child}) => (
    <StyledPanel 
        id={id} 
        key={id}>
        {child}
    </StyledPanel>
);

Panel.propTypes = {
    id: PropTypes.string.isRequired,
    child: PropTypes.element.isRequired
};

export default Panel;