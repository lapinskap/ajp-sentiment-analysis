import {NavLink} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Header = () => (
    <header>
        <h1>AJP Sentiment Analysis</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/password" activeClassName="is-active" exact={true}>Change Password</NavLink>
        <NavLink to="/newaccount" activeClassName="is-active" exact={true}>Create New Account</NavLink>
        <NavLink to="/signin" activeClassName="is-active" >Sign in</NavLink>
    </header>
    );

export default Header;
