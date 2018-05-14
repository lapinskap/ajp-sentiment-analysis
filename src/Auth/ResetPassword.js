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

class ResetPassword extends Component {
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
             
            

             
            

               <SubText></SubText>
                <Bottom>
                <Button color="primary">Reset password</Button>{" "}
             
                <TextLink to={"/signin"}>Back to Sign In</TextLink>
                <span> </span>
              </Bottom>
              </form>
            </div>
          )}
        />
      </AuthTemplate>
    );
  }
}

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
 
  color:#4ec2e2;
 


`

const SubText = styled.div`
  padding-top:10px;
  

`


export default ResetPassword;
