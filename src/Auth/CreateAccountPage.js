import React from "react";
import styled from "styled-components";
import AuthTemplate from "./AuthTemplate";
import { Button } from "reactstrap";
import { Form, Field } from "react-final-form";
import renderInput from "../components/Input";
import renderCheckbox from "../components/Checkbox";
import colors from "../colors";

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const required = value => (value ? undefined : "Field is required");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
 
class CreateAccountPage extends React.Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

  render() {
    return (
      <AuthTemplate>
        <Title>Create New Account</Title>

        <Form
          onSubmit={this.onSubmit}
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
                name="password"
                component={renderInput}
                type="password"
                label="Confirm password:"
                validate={required}
              />

              <Field
                name="tos"
                component={renderCheckbox}
                label="I agree to the Terms of Service and Privacy Policy"
                validate={required}
              />

              <Bottom>
                <Button color="primary">Create New Account</Button>
              </Bottom>
            </form>
          )}
        />
      </AuthTemplate>
    );
  }
}

export default CreateAccountPage;

const Title = styled.div`
  color: ${colors.primary};
  margin: 30px 0px;
  font-size: 18px;
  font-weight: 300;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextLink = styled.a`
  color: ${colors.secondary};
  font-size: 14px;

  &:hover {
    color: ${colors.secondary};
  }
`;