import * as React from 'react';

export interface IAnchorPropTypes {
    text: string;
    id?: string;
    name?: string;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Anchor: React.SFC<IAnchorPropTypes> = ({text, ...rest}) => {
    return (
        <a {...rest}>
            {text}
        </a>
    );
};

export default Anchor;