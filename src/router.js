
import React from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './components/App'
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Join from './routes/Join';
import Store from './routes/Store'

const AppRoute = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/join" component={Join}/>
            <Route exact path="/tienda" component={Store}/>
            <Route path="*" component={NotFound} />
        </Switch>
    </App>;

export default AppRoute;
