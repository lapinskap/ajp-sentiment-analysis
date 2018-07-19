import React from "react";
import "../Bootstrap.css";
import styled from "styled-components";

const TestTemplate = ({ children }) => {
  return (
    <Body>
      <Middle>{children}</Middle>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  jostify-content: center;
`;

const Middle = styled.div`
   width: 600px;
    margin: 85px auto 0px auto;
    padding: 25px 30px;
    background-color: #feffff;
    border: 1px solid #ebf2fa;
    border-radius: 3px;
`;

export default TestTemplate;
