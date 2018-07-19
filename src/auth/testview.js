import React, { Component } from "react";
import styled from "styled-components";

import TestTemplate from "./TestTemplate";
import renderInput from "../components/form/Input";
import { Link } from "react-router-dom";

import RenderNavbar from "../components/menu/Navbar";
import { Form, Field } from "react-final-form";
import { Button, Col, Media } from "reactstrap";

class testview extends Component {
  render() {
    return (
      <div>
        <RenderNavbar />
        <TestTemplate>
          <Col sm={13}>
            <Media left>
              <Media object src="image/logo.png" />
            </Media>
          </Col>
          <Body>
            Testowy widok do nauki
            <Form
              onSubmit={this.onSubmit}
              render={({ handleSubmit, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="email"
                    component={renderInput}
                    type="text"
                    label="Adress e-mail:"
                  />
                  <Footer>
                    <Button color="primary" onClick={this.toggle}>
                      Reset password
                    </Button>{" "}
                    <TextLink to={"/signin"}>Back to sign in</TextLink>
                  </Footer>
                </form>
              )}
            />
          </Body>
        </TestTemplate>
      </div>
    );
  }
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextLink = styled(Link)`
  font-weight: 700;
  margin-right: 35px;
  color: #4ec2e2;
  font-size: 14px;
  &:hover {
    color: #4ec2e2;
    text-decoration: none;
  }
`;

const Body = styled.div`
  margin-top: 30px;
`;

export default testview;
