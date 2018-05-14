import React from 'react';
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import colors from "../colors";
import {Link} from "react-router-dom";
import AuthTemplate from "./AuthTemplate";
import renderInput from "../components/Input";
import renderCheckbox from "../components/Checkbox";
import {composeValidators, required, email} from "../lib/validation";
import sleep from "../lib/utils";

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

sleep();

const ChangePasswordPage = (props) => (
    <AuthTemplate>
    <Title> Change Password</Title>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  component={renderInput}
                  type="password"
                  label="Password:"
                  validate={composeValidators(required, email)}
                />
                <Field
                  name="password"
                  component={renderInput}
                  type="password"
                  label="Password:"
                  validate={required}
                />
            <Bottom>
                <Button color="primary">Change Password</Button>{" "}
                <TextLink to={"/signin"}>Back to sign in</TextLink>
            </Bottom>
              </form>
            </div>
          )}
        />
      </AuthTemplate>
    );


const Title = styled.h1`
    color: #9585c4;
    font-weight: 400;
    font-size: 22px;
    margin:30px 0px;`

const Bottom = styled.p`   
    display:flex;
    align-items: center
    justify-content: space-between`

const TextLink = styled(Link)`
    font-weight: 700
    color: #4ec2e2
    text-align: center
    margin-left:10px`

export default ChangePasswordPage;