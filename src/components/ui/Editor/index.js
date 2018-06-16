import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';

class Editor extends PureComponent {

    constructor(props) {
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

Editor.defaultProps = {
    readOnly: false,
    autoFocus: false,
    cursorBlinkRate: 530
};

Editor.propTypes = {
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    cursorBlinkRate: PropTypes.number
};

export default Editor;