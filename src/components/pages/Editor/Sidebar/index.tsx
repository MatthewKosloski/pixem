import * as React from 'react';

import Header from './Header';
import Form from './Form';
import { Container } from './Styles';

interface IPropTypes {
    base: string;
    unit: string;
    shouldPreserveOriginalValues: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IState {
    isHamburgerOpen: boolean;
}

class Sidebar extends React.Component<IPropTypes, IState> {

    constructor(props: IPropTypes) {
        super(props);
        this.state = {
            isHamburgerOpen: false
        };
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    }

    handleHamburgerClick() {
        this.setState({
            isHamburgerOpen: !this.state.isHamburgerOpen
        });
    }

    render() {
        return (
            <Container>
                <Header onHamburgerClick={this.handleHamburgerClick} />
                <Form 
                    isMobileFormVisible={this.state.isHamburgerOpen} 
                    {...this.props}/>
            </Container>
        );   
    }

}

export default Sidebar;