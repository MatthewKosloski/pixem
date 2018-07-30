import * as React from 'react';
import styled, { css } from 'styled-components';

import { _vrrem, _rem } from '@util-wrappers';

import Header from './Header';
import Form from './Form';

const StyledSidebar = styled('aside')`${
    ({theme: {
        media: {md}, 
        colors: {shark, white, cadetBlue, mako}
    }}) => css`
        background-color: ${shark};
        border-bottom: 2px solid ${mako};
        color: ${cadetBlue};
        font-size: ${_rem(14)};
        padding: ${_vrrem(1)};
        a {
            color: ${white};
        }
        @media ${md} {
            height: 100vh;
            border-bottom: none;
            border-right: 2px solid ${mako};
            font-size: ${_rem(16)};
        }
`}`;

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
        return this.state.viewportWidth <= 768;
    }

    handleHamburgerClick() {
        this.setState({
            isHamburgerOpen: !this.state.isHamburgerOpen
        });
    }

    render() {
        return (
            <StyledSidebar>
                <Header 
                    onHamburgerClick={this.handleHamburgerClick}
                    isMobile={this.isMobile()}/>
                <Form 
                    isMobile={this.isMobile()}
                    isMobileFormVisible={this.state.isHamburgerOpen} 
                    {...this.props}/>
            </StyledSidebar>
        );   
    }

}

export default Sidebar;