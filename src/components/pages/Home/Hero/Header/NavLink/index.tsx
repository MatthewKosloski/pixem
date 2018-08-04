import * as React from 'react';

import { Container, Link } from './Styles';

export default (props) => {
    return (
        <Container>
            <Link {...props}>
                {props.children}
            </Link>
        </Container>
    );
}