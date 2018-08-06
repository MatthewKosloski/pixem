import * as React from 'react';

import { Title, Paragraph, Container } from './Styles';

interface IPropTypes {
    title: string;
    text: string;
    number: string;
}

const UsageItem: React.SFC<IPropTypes> = ({title, text, number}) => {
    return (
        <Container>
            <Title data-number={number}>{title}</Title>
            <Paragraph>{text}</Paragraph>
        </Container>
    );
}

export default UsageItem;