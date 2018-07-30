import * as React from 'react';
import * as random from 'randomstring';

import { HelpIcon } from '@atoms';

import StyledTooltip from './StyledTooltip';
import StyledIconContainer from './StyledIconContainer';

interface IPropTypes {
    text: string;
}

interface IState {
    id: string;
}

class Tooltip extends React.PureComponent<IPropTypes, IState> {

    constructor(props: IPropTypes) {
        super(props);
        this.state = {
            id: random.generate()
        }
    }

    render() {
        const { text } = this.props;
        const { id } = this.state;
        return (
            <StyledTooltip>
                <button 
                    type="button" 
                    aria-label="More info" 
                    aria-describedby={id}>
                    <StyledIconContainer>
                        <HelpIcon />
                    </StyledIconContainer>
                </button>
                <span id={id}>{text}</span>
            </StyledTooltip>
        );
    }
}

export default Tooltip;