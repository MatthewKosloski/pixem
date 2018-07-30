import * as React from 'react';

import StyledPanel from './StyledPanel';

interface IPropTypes {
    id: string;
    child: React.ReactNode;
}

const Panel: React.SFC<IPropTypes> = ({id, child}) => (
    <StyledPanel 
        id={id} 
        key={id}>
        {child}
    </StyledPanel>
);

export default Panel;