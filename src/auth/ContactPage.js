import React, { Component } from "react";
import styled from "styled-components";

import MainTemplate from "./MainTemplate";
import RenderNavbar from "../components/menu/Navbar";
import renderInput from "../components/form/Input";
import renderCheckbox from "../components/form/Checkbox";

import { Form, Field } from "react-final-form";
import { sleep } from "../lib/utils";
import { composeValidators, required, email } from "../lib/validation";
import { Button, Row, Col } from "reactstrap";

class ContactPage extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

  render() {
    return (
      <div>
        <RenderNavbar />
        <HeadText>Contact</HeadText>
        <ViewDiv>
          <MainTemplate>
            <FormPadding>
              <Form
                onSubmit={this.onSubmit}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm="5">
                        <Field
                          name="name"
                          component={renderInput}
                          type="text"
                          label="Name:"
                          validate={required}
                        />
                      </Col>
                      <Col>
                        <Field
                          name="email"
                          component={renderInput}
                          type="text"
                          label="Adress e-mail:"
                          validate={composeValidators(required, email)}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Message
                          name="message"
                          component={renderInput}
                          type="textarea"
                          label="Message:"
                          validate={required}
                        />
                        <Field
                          type="checkbox"
                          name="checkbox"
                          component={renderCheckbox}
                          label="I agree to the terms and conditions."
                          validate={required}
                        />
                        <SpecialBtn color="secondary" onClick={this.toggle}>
                          Send message
                        </SpecialBtn>
                      </Col>
                    </Row>
                  </form>
                )}
              />
            </FormPadding>
          </MainTemplate>
        </ViewDiv>
      </div>
    );
  }
}

const FormPadding = styled.div`
  padding: 30px 0 30px 40px;
  height: 360px;
`;

const ViewDiv = styled.div`
  width: 900px;
  margin: 0px auto 0px auto;
  padding: 30px 80px 35px 30px;
  background-color: #feffff;
  border: 1px solid #ebf2fa;
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);
`;

const HeadText = styled.div`
  color: #7387a9;
  font-weight: 600;
  padding: 8px 0px 0px 0px;
  font-size: 17px;
  width: 900px;
  margin: 40px auto 10px auto;
`;

const SpecialBtn = styled(Button)`
  color: white;
  width: 170px;
  top: 80px;
  float: right;
  left: 80px;
  position: relative;
`;

const Message = styled(Field)`
  height: 150px;
  resize: none;
`;

export default ContactPage;
