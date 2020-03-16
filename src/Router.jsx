import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Root from './pages/root/Root';
import Login from './pages/login/Login';
import Error from './pages/error/Error';

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/root" component={Root}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route component={Error}></Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
