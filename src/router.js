import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './pages/admin';
import Detail from './pages/detail';
import NoMatch from './pages/noMatch';
import Home from './components/Home';
import Lazy from './components/Lazy&Suspense';
import Context from './components/Context';
import Refs from './components/Refs';
import Hoc from './components/Hoc';
export default class IRouter extends Component{
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Redirect exact from="/" to="/admin"></Redirect>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                    <Redirect exact from="/admin" to="/admin/home"/>
                                    <Route path="/admin/home" component={Home}></Route>
                                    <Route path="/admin/lazy" component={Lazy}></Route>
                                    <Route path="/admin/context" component={Context}></Route>
                                    <Route path="/admin/refs" component={Refs}></Route>
                                    <Route path="/admin/hoc" component={Hoc}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>}>
                        </Route>
                        <Route path="/order/detail" component={Detail}></Route>
                    </Switch>
                </App>
            </Router>
        );
    }
} 