import * as React from 'react';

import { common } from '@data';
import { Anchor } from '@atoms';

import { Container } from './Styles';

const { name, url } = common.author;

class Subtitle extends React.PureComponent {
    render() {
        return (
            <Container>
                A tool made by <Anchor 
                    text={name} 
                    href={url} />
            </Container>
        );
    }
}

export default Subtitle;