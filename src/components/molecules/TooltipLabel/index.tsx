import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';

import { _vrrem } from '@util-wrappers';
import { Label } from '@atoms';

import Tooltip from '../Tooltip';

const MobileLabel = Label.extend`${
    ({theme: {colors: {white}, media: {md}}}) => css`
        color: ${white};
        margin-bottom: ${_vrrem(0.25)};
        @media ${md} {
            margin-bottom: ${_vrrem(1)};
            color: inherit;
        }
    `
}
`;

const Paragraph = styled('p')`
    margin-bottom: ${_vrrem(1)};
`;

interface IPropTypes {
    title: string;
    htmlFor?: string;
    tooltipText?: string;
    useParagraph?: boolean;
}

interface IDefaultProps {
    useParagraph: boolean;
}

export const TooltipLabel: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps> {

    static defaultProps: IDefaultProps = {
        useParagraph: false
    };

    render() {
        const { 
            htmlFor, 
            title, 
            tooltipText, 
            useParagraph, 
        } = this.props;

        const props = htmlFor ? {htmlFor} : {};
        let children: any = [
            React.createElement('span', {children: title}),
        ];

        const TooltipComponent = React.createElement(Tooltip, {text: tooltipText});

        const type = htmlFor 
            ? MobileLabel 
            : MobileLabel.withComponent('div');

        if(useParagraph) {
            return React.createElement(
                'div',
                null,
                React.createElement(type, props, ...children),
                React.createElement(Paragraph, null, tooltipText)
            );
        } else {
            if(tooltipText) {
                children.push(TooltipComponent);
            }
            return React.createElement(type, props, ...children);
        }

    }
}

export default TooltipLabel;