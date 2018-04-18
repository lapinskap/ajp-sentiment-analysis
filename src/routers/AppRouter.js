import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import AuthTemplate from '../components/AuthTemplate';
import SignInPage from '../components/SignInPage';
import CreateAccountPage from '../components/CreateAccountPage';
import ChangePasswordPage from '../components/ChangePasswordPage';

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