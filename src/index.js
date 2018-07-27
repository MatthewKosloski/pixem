import { render } from 'react-dom';

import App from './App';
import './global-styles';
import './img/curve.svg';

const root = document.getElementById('app');
if(root !== null) {
    render(App, root);
}