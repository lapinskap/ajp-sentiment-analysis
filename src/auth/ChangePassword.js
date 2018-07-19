import React, { Component } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import AuthTemplate from "./AuthTemplate";
import renderInput from "../components/form/Input";
import { sleep } from "../lib/utils";
import { required } from "../lib/validation";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class ChangePassword extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

  render() {
    return (
      <AuthTemplate>
        <Title>Change your password</Title>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="password1"
                component={renderInput}
                type="password"
                label="Password:"
                validate={required}
              />
              <Field
                name="password2"
                component={renderInput}
                type="password"
                label="Repeat password:"
                validate={required}
              />
              <Footer>
                <Button color="primary" onClick={this.toggle}>
                  Change password
                </Button>{" "}
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
  margin-right: 25px;
  color: #4ec2e2;
  font-size: 14px;
  &:hover {
    color: #4ec2e2;
    text-decoration: none;
  }
`;

export default ChangePassword;
