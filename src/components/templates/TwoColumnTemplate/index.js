import React from 'react';
import PropTypes from 'prop-types';

import { Row, Column } from '../../atoms';

const TwoColumnTemplate = ({
    firstColumnWidths,
    secondColumnWidths,
    firstColumn,
    secondColumn
}) => {
    return (
        <Row mx={0}>
            <Column 
                width={firstColumnWidths} 
                px={0}>
                {firstColumn}
            </Column>
            <Column 
                width={secondColumnWidths} 
                px={0}>
                {secondColumn}
            </Column>
        </Row>
    );
};

TwoColumnTemplate.propTypes = {
    firstColumnWidths: PropTypes.array,
    secondColumnWidths: PropTypes.array,
    firstColumn: PropTypes.node.isRequired,
    secondColumn: PropTypes.node.isRequired
};

TwoColumnTemplate.defaultProps = {
    firstColumnWidths: [1, 1, '300px'],
    secondColumnWidths: [1, 1, 'calc(100vw - 300px)']
};

export default TwoColumnTemplate;