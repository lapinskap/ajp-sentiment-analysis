import React, { Component } from "react";
import styled from "styled-components";
import MainTemplate from "./MainTemplate";
import { Form, Field } from "react-final-form";
import renderInput from "../components/form/Input";
import { sleep } from "../lib/utils";
import RenderNavbar from "../components/menu/Navbar";
import { composeValidators, email, password, required} from "../lib/validation";
import FaPlus from "react-icons/lib/fa/plus";

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

class Dashboard extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

  render() {
    return (
      <div>
        <RenderNavbar />
        <HeadText>Profile</HeadText>
        <ViewDiv>
          <MainTemplate>
            <Container>
              <Row>
                <Photo className="xs-2">
                  {" "}
                  <div style={{'width':'100px', 'height':'100px','position':'relative'}}>
                  <img src="image/pobrane.jpg" alt="" style={{'width':'100%','borderRadius':'50%'}}/>
                  <ButtonA color="primary" onClick={this.toggle} size='sm'>
                    <FaPlus />
                  </ButtonA>
                  </div>
                </Photo>
                <ColOne className="xs-5">
                  <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, pristine, invalid }) => (
                      <form onSubmit={handleSubmit}>
                        <Field
                          name="Name"
                          component={renderInput}
                          type="text"
                          label="Name:"
                          validate={required}
                        />
                        <Field
                          name="LastName"
                          component={renderInput}
                          type="text"
                          label="Last name:"
                          validate={required}
                        />
                        <Field
                          name="email"
                          component={renderInput}
                          type="email"
                          label="Address e-mail:"
                          validate={composeValidators(required, email)}
                        />
                      </form>
                    )}
                  />
                </ColOne>
                <ColTwo className="xs-5">
                  <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, pristine, invalid }) => (
                      <form onSubmit={handleSubmit}>
                        <Field
                          name="password1"
                          component={renderInput}
                          type="password"
                          label="Password:"
                          validate={composeValidators(required, password)}
                        />
                        <Footer>
                          <Button color="primary" href={"/changepassword"}>
                            Change password
                          </Button>{" "}
                        </Footer>
                      </form>
                    )}
                  />
                </ColTwo>
              </Row>
            </Container>
          </MainTemplate>
        </ViewDiv>
        <FooterBtn>
          <Row>
            <Col xs="10" />
            <Col xs="2">
              <SpecialBtn color="secondary" onClick={this.toggle}>
                Save
              </SpecialBtn>
            </Col>
          </Row>
        </FooterBtn>
      </div>
    );
  }
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewDiv = styled.div`
  width: 900px;
  margin: 10px auto 0px auto;
  padding: 15px;
  background-color: #feffff;
  border: 1px solid #ebf2fa;
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);
`;

const HeadText = styled.div`
  color: #7387a9;
  font-weight: 600;
  padding: 8px 0px 0px 0px;
  font-size: 15px;
  width: 900px;
  margin: 40px auto 0px auto;
`;

const FooterBtn = styled.div`
  width: 900px;
  margin: 15px auto 0px auto;
`;

const SpecialBtn = styled(Button)`
  color: white;
  width: 125px;
`;

const Photo = styled.div`
  overflow: hidden;
  margin: 15px 35px 0 20px;
`;

const ColOne = styled(Col)`
  margin-top: 30px;
`;

const ColTwo = styled(Col)`
  margin-top: 30px;
`;

const ButtonA = styled(Button)`
position:absolute;
Bottom: 0px;
Right: 0px;

`;

export default Dashboard;
