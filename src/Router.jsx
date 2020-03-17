import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import Root from './pages/root/Root';
import Buttons from './pages/root/ui/buttons/Buttons';
import Modals from './pages/root/ui/modals/Modals';
import Loadings from './pages/root/ui/loadings/Loadings';
import Notifications from './pages/root/ui/notifications/Notifications';
import Messages from './pages/root/ui/messages/Messages';
import Tabs from './pages/root/ui/tabs/Tabs';
import Carousel from './pages/root/ui/carousel/Carousel';
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
                                    <Route path="/root/ui/modals" component={Modals}></Route>
                                    <Route path="/root/ui/loadings" component={Loadings}></Route>
                                    <Route path="/root/ui/notifications" component={Notifications}></Route>
                                    <Route path="/root/ui/messages" component={Messages}></Route>
                                    <Route path="/root/ui/tabs" component={Tabs}></Route>
                                    <Route path="/root/ui/carousel" component={Carousel}></Route>
                                    <Route path="/root/dashboard" component={Home}></Route>
                                    <Route component={Error}></Route>
                                    {/* <Redirect to="/error"></Redirect> */}
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
