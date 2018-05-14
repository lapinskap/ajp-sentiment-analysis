import React, { Component } from "react";
import styled from "styled-components";
import colors from "../colors";
import {
  Button,
  Form,
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

const ProfileTemplate = ({ children }) => {
  return (
    <Wrapper>
      <View>
        <Header>
          <Logo src="./images/logo.png" />
          <TextAjp>AJP Sentiemnt Analysis</TextAjp>
        </Header>
        {children}
      </View>
    </Wrapper>
  );
};

export default ProfileTemplate;

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
`;

const View = styled.div`
    width: 800px;
    height:auto;
    margin: 85px auto 0px;
    padding: 25px 30px;
    background-color: #feffff;
    border : 1px solid #ebf2fa
    border-radius: 3px;
    box-shadow 0px 2px 10px 0px rgba(200, 200, 200, 0.5);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
`;

const TextAjp = styled.div`
  color: ${colors.textDark};
  margin-left:15px;
  font-weight: 500;
`;

