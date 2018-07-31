import * as React from 'react';

import Tooltip from '../Tooltip';

import { MobileLabel, Paragraph } from './Styles';

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