import * as React from 'react';
import * as random from 'randomstring';

import { HelpIcon } from '@atoms';

import { Container, IconContainer } from './Styles';

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
            <Container>
                <button 
                    type="button" 
                    aria-label="More info" 
                    aria-describedby={id}>
                    <IconContainer>
                        <HelpIcon />
                    </IconContainer>
                </button>
                <span id={id}>{text}</span>
            </Container>
        );
    }
}

export default Tooltip;