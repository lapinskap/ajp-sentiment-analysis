import React from "react";
import styled from "styled-components";

import colors from "../colors";

const AuthTemplate = ({ children }) => {
  return (
    <Div>
      <View>
        <Header>
          <Logo src="../public/images/logo.png" />
          <AppName>AJP Sentiment Analysis</AppName>
        </Header>
        {children}
      </View>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
`;

const View = styled.div`
  width: 405px;
  margin: 85px auto 0px;
  padding: 25px 30px;
  background-color: #feffff;
  border: 1px solid #ebf2fa;
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const AppName = styled.div`
  color: ${colors.textDark};
  margin-left: 15px;
  font-size: 15px;
`;

export default AuthTemplate;
