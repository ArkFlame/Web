
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './components/App'
import Home from './routes/Home';
import NotFound from './routes/NotFound';

const AppRoute = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="*" component={NotFound} />
        </Switch>
    </App>;

export default AppRoute;
