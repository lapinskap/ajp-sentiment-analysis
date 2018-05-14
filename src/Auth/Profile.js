import React, { Component } from "react";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import RenderNavBar from  "../components/Nav";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import colors from "../colors";
import {Link} from "react-router-dom";
import renderInput from "../components/Input";
import renderCheckbox from "../components/Checkbox";
import {composeValidators, required, email} from "../lib/validation";
import ProfileTemplate from "./ProfileTemplate";
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
 class Profile extends React.Component {
  render(){
  
  return(
<div>
    <RenderNavBar> </RenderNavBar>
    <ProfileTemplate>
        <Title> Sign in your account </Title>

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
       

              <Bottom>
         
                <Button color="primary">Sign in</Button>{" "}
                <TextLink to={"/resetpass"}>Forgot Password?</TextLink>
             
               
               
                <TextLink to={"/signup"}>Sign up</TextLink>
           
                </Bottom>
              </form>
            </div>
          )}
        />
      </ProfileTemplate>
</div>
  )
  
  }
}

export default Profile;

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
