import * as React from 'react';

import { Media } from '@molecules';
import { DesktopNav } from './Styles';

interface IPropTypes {
    children: React.ReactNode[]
}

const Nav: React.SFC<IPropTypes> = ({children}) => {
    return (
        <Media query={500}>
            {(isMatch: boolean) => 
                isMatch ? (
                    <DesktopNav>
                        <ul>
                            {children}
                        </ul>
                    </DesktopNav>
                ) : null
            }
        </Media>
    );
}

export default Nav;