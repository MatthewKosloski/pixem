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
    viewportWidth: number;
    isHamburgerOpen: boolean;
}

class Sidebar extends React.Component<IPropTypes, IState> {

    constructor(props: IPropTypes) {
        super(props);
        this.state = {
            viewportWidth: window.innerWidth,
            isHamburgerOpen: false
        };
        this.onResize = this.onResize.bind(this);
        this.isMobile = this.isMobile.bind(this);
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        const viewportWidth = window.innerWidth;
        this.setState({viewportWidth});
    }

    isMobile() {
        return this.state.viewportWidth <= 767;
    }

    handleHamburgerClick() {
        this.setState({
            isHamburgerOpen: !this.state.isHamburgerOpen
        });
    }

    render() {
        return (
            <Container>
                <Header 
                    onHamburgerClick={this.handleHamburgerClick}
                    isMobile={this.isMobile()}/>
                <Form 
                    isMobile={this.isMobile()}
                    isMobileFormVisible={this.state.isHamburgerOpen} 
                    {...this.props}/>
            </Container>
        );   
    }

}

export default Sidebar;