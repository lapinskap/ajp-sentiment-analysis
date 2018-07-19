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

class ResetPassword extends Component{
    onSubmit = async data => {
        await sleep(2000);
        console.log(data);
      };

    render() {
        return(
            <AuthTemplate>
                <Title>Reset your password</Title>
                    <Form onSubmit={this.onSubmit}
                        render={({ handleSubmit, pristine, invalid }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="email"
                                    component={renderInput}
                                    type="text"
                                    label="Adress e-mail:"
                                    validate={composeValidators(required, email)}
                                />
                                <Footer>
                                    <Button color="primary" onClick={this.toggle}>Reset password</Button>{' '}
                                    <TextLink to={"/signin"}>Back to sign in</TextLink>
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
    margin-right: 35px;
    color:  #4ec2e2;
    font-size: 14px;
    &:hover {
        color:  #4ec2e2;
        text-decoration: none;
    }
`;

export default ResetPassword