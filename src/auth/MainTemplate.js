import React from "react";
import "../Bootstrap.css";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return (
      <HeaderText>
        {children}
      </HeaderText>
  );
};

const HeaderText = styled.div`
  color: #7387a9;
  font-weight: 600;
  padding: 8px 0px 0px 15px;
  font-size: 15px;
`;

export default MainTemplate;
