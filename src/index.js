
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import AppRoute from './router';

ReactDOM.render(
<Router>
    <AppRoute />
</Router>, document.getElementById('root')
);

serviceWorker.register();
