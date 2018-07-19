import React, {Component} from "react";
import styled from "styled-components";
import {Form, Field} from "react-final-form";
import AuthTemplate from "./AuthTemplate";
import renderInput from "../components/form/Input";
import {sleep} from "../lib/utils";
import {composeValidators, required, email} from "../lib/validation";
import {Link} from "react-router-dom";

import { 
    Button, 
    } from 'reactstrap';
import renderCheckbox from "../components/form/Checkbox";

class SignIn extends Component{
    onSubmit = async data => {
        await sleep(2000);
        console.log(data);
      };

    render() {
        return(
            <AuthTemplate>
                <Title>Sign in your account</Title>
                    <Form onSubmit={this.onSubmit}
                        render={({ handleSubmit, pristine, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="email"
                                    component={renderInput}
                                    type="text"
                                    label="Email address:"
                                    validate={composeValidators(required, email)}
                                />
                                <Field
                                    name="password"
                                    component={renderInput}
                                    type="password"
                                    label="Password:"
                                    validate={required}
                                />
                                <Field
                                    type="checkbox"
                                    name="tos"
                                    component={renderCheckbox}
                                    label="I agree to the Terms of Service and Privacy Policy"
                                    validate={required}
                                />
                                <Footer>
                                    <Button color="primary" onClick={this.toggle}>Sign in</Button>{' '}
                                    <TextLink to={"/resetpassword"}>Forgot password?</TextLink>{' '}
                                    <TextLink to={"/signup"}>Sign up</TextLink>
                                </Footer>
                            </form>
                         )}
                    />
            </AuthTemplate>
        );
    }
}

const Title = styled.div`
    color: $light;
    margin: 30px 0px;
    font-size: 19px;
    font-weight: 300;
`;

const Footer = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
`;

const TextLink = styled(Link)`
    font-weight: 700;
    color:  #4ec2e2;
    font-size: 14px;
    &:hover {
        color:  #4ec2e2;
        text-decoration: none;
    }
`;

export default SignIn;