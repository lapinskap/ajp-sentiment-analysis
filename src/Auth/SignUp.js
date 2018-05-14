import React, { Component } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import colors from "../colors";
import {Link} from "react-router-dom";
import renderInput from "../components/Input";
import renderCheckbox from "../components/Checkbox";
import {composeValidators, required, email} from "../lib/validation";
import {sleep} from "../lib/utils";

import {
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Container,
  Col,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Modal,
  Media
} from "reactstrap";
import AuthTemplate from "./AuthTemplate";

sleep();

class SignUp extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

  render() {
    return (
      <AuthTemplate>
        <Title> Create Account</Title>

        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  component={renderInput}
                  type="text"
                  label="Adress e-mail:"
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
                name="tos"
                component={renderCheckbox}
                type="checkbox"
                label="I agree to the Terms of Service and Privacy Policy"
                />

             
                <Button color="primary">Sign up</Button>{" "}

              
                <SubText>
                  <TextInfo>Already have an account? </TextInfo>
               
                <TextLink to={"/signin"}>Sign In</TextLink>
                </SubText>
              
              </form>
            </div>
          )}
        />
      </AuthTemplate>
    );
  }
}

const SubText = styled.div`
  padding-top:15px;

`

const Title = styled.h1`
  color: #9585c4;
  font-weight: 400;
  font-size: 22px;
  margin:30px 0px;
`;

const Bottom = styled.div`
display:flex;

align-items:center;
justify-content: space-between;
`
const TextLink = styled(Link)`
  font-weight: 600;
  color:#4ec2e2;
  text-align: left;
  font-size: 14px;

`
const TextInfo = styled.a`
  font-weight: 500;

  text-align: left;
  font-size: 14px;

`


export default SignUp;
