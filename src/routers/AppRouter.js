import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from '../Auth/Header';
import NotFoundPage from '../Auth/NotFoundPage';
import AuthTemplate from '../Auth/AuthTemplate';
import SignInPage from '../Auth/SignInPage';
import CreateAccountPage from '../Auth/CreateAccountPage';
import ChangePasswordPage from '../Auth/ChangePasswordPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={AuthTemplate} exact={true}/>
            <Route path="/newaccount" component={CreateAccountPage}/>
            <Route path="/password" component={ChangePasswordPage} />
            <Route path="/signin" component={SignInPage} />
            <Route component={NotFoundPage}/>

        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;