import * as React from 'react';

import { Container } from './Styles';

export interface IPropTypes {
    isMobile?: boolean;
}

interface IDefaultProps {
    isMobile: boolean;
}

const Title: React.ComponentClass<IPropTypes> =
  class extends React.PureComponent<IPropTypes & IDefaultProps> {

    static defaultProps: IDefaultProps = {
        isMobile: false
    }

    render() {
        return (
            <Container {...this.props}>
                <a href="#">Pixem</a>
            </Container>
        );
    }
}

export default Title;