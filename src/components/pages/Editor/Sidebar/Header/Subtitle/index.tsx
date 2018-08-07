import * as React from 'react';

import { Container } from './Styles';

class Subtitle extends React.PureComponent {
    render() {
        return (
            <Container>
                A tool made by <a href="//matthewkosloski.me">
                    Matthew Kosloski
                </a>
            </Container>
        );
    }
}

export default Subtitle;