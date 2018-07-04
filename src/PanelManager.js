import React, { Component } from 'react';
import styled from 'styled-components';
import Split from 'split.js';

const StyledContainer = styled('div')`
    display: flex;
    flex-direction: row;
    height: 100vh;
`;

const StyledPanel = styled('div')`
    height: 100%;
`;

const Panel = ({id, child}) => (
    <StyledPanel 
        id={id} 
        key={id}>
        {child}
    </StyledPanel>
);

const getPanelIds = quantity =>
    [...Array(quantity)].map((_, i) => `panelmanager-panel${i+1}`);

const getInterpolatedPanelIds = ids =>
    ids.map(id => `#${id}`);

class PanelManager extends Component {

    componentDidMount() {

        const elements = getInterpolatedPanelIds(
            getPanelIds(this.props.children.length));

        const options = {
            gutterSize: 2,
            elementStyle: (_, size, gutterSize) => ({
                'flex-basis': `calc(${size}% - ${gutterSize}px)`
            }),
            gutterStyle: (_, gutterSize) => ({
                'flex-basis': `${gutterSize}px`
            })
        };

        Split(elements, options);
    }

    render() {
        const panelIds = getPanelIds(this.props.children.length);
        return (
            <StyledContainer>
                {this.props.children.map((child, i) => 
                    Panel({child, id: panelIds[i]}))}
            </StyledContainer>  
        );
    }

}

export default PanelManager;