import * as React from 'react';
import { Flex } from 'grid-styled';

import { Media, Hamburger } from '@molecules';
import { MobileNav, DesktopNav, MobileContainer } from './Styles';
import theme from '@src/theme';

const { white, cadetBlue } = theme.colors;

interface IState {
    isMobileNavOpen: boolean;
}

class Nav extends React.Component<{}, IState> {

    mobileNavId: string;

    constructor(props: {}) {
        super(props);
        this.state = {
            isMobileNavOpen: false
        }
        this.mobileNavId = 'hero-mobile-nav';
        this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    }

    handleHamburgerClick() {
        this.setState({
            isMobileNavOpen: !this.state.isMobileNavOpen
        });
    }

    render() {
        const { children } = this.props;
        const { isMobileNavOpen } = this.state;
        return (
            <Media>
                {(isDesktop: boolean) => 
                    isDesktop ? (
                        <DesktopNav>
                            <ul>
                                {children}
                            </ul>
                        </DesktopNav>
                    ) : (
                        <Flex justifyContent="flex-end">
                            <MobileNav 
                                isMobileNavOpen={isMobileNavOpen}
                                id={this.mobileNavId}>
                                <ul>
                                    {children}
                                </ul>
                            </MobileNav>
                            <Hamburger 
                                ariaControls={this.mobileNavId}
                                onClick={this.handleHamburgerClick}
                                openColor={white}
                                closeColor={cadetBlue}/>
                        </Flex>
                    )
                }
            </Media>
        );
    }
}

export default Nav;