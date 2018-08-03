import * as React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';

// Navigator is not defined when using SSR
try {
    require('codemirror/mode/css/css');
} catch(e) {
    console.error(e);
}

import 'codemirror/lib/codemirror.css';

interface IPropTypes {
    readOnly?: boolean;
    autoFocus?: boolean;
    cursorBlinkRate?: number;
    value: string;
    onBeforeChange: (editor: any, data: any, value: any) => void;
}

interface IDefaultProps {
    readOnly: boolean;
    autoFocus: boolean;
    cursorBlinkRate: number;
}

interface IOptions {
    mode: string;
    theme: string;
    lineNumbers: boolean;
    lineWrapping: boolean;
    autofocus: boolean;
    readOnly: boolean;
    cursorBlinkRate: number;
}

export const Textarea: React.ComponentClass<IPropTypes> =
  class extends React.Component<IPropTypes & IDefaultProps> {

    options: IOptions;

    static defaultProps: IDefaultProps = {
        readOnly: false,
        autoFocus: false,
        cursorBlinkRate: 530
    }

    constructor(props: IPropTypes & IDefaultProps) {
        super(props);

        const { 
            readOnly, 
            autoFocus: autofocus, 
            cursorBlinkRate 
        } = props;

        this.options = {
            mode: 'css',
            theme: 'pixem',
            lineNumbers: true,
            lineWrapping: true,
            autofocus,
            readOnly,
            cursorBlinkRate
        };
    }

    render() {
        return(
            <CodeMirror 
                {...this.props}
                options={this.options}
            />
        );
    }

}

export default Textarea;