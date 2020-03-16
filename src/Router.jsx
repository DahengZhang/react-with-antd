import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Root from './pages/root/Root';
import Buttons from './pages/root/ui/buttons/Buttons';
import Home from './pages/root/home/Home';

import Login from './pages/login/Login';
import Error from './pages/error/Error';

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/root" render={() =>
                            <Root>
                                <Switch>
                                    <Route path="/root/ui/buttons" component={Buttons}></Route>
                                    <Route path="/root/dashboard" component={Home}></Route>
                                    <Route component={Error}></Route>
                                </Switch>
                            </Root>
                        }></Route>
                        <Route component={Error}></Route>
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
