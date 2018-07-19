import React from 'react';
import PropTypes from 'prop-types';

import { Row, Column } from '../../atoms';

const TwoColumn = ({
    columnOneWidths,
    columnTwoWidths,
    columnOneNode,
    columnTwoNode
}) => {
    return (
        <Row mx={0}>
            <Column 
                width={columnOneWidths} 
                px={0}>
                {columnOneNode}
            </Column>
            <Column 
                width={columnTwoWidths} 
                px={0}>
                {columnTwoNode}
            </Column>
        </Row>
    );
};

TwoColumn.propTypes = {
    columnOneWidths: PropTypes.arrayOf(PropTypes.number),
    columnTwoWidths: PropTypes.arrayOf(PropTypes.number),
    columnOneNode: PropTypes.node.isRequired,
    columnTwoNode: PropTypes.node.isRequired
};

TwoColumn.defaultProps = {
    columnOneWidths: [1, 1, '300px'],
    columnTwoWidths: [1, 1, 'calc(100vw - 300px)']
};

export default TwoColumn;