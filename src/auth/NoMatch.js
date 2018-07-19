import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

// import routes from "./routes";

const NoMatch = () => (
  <Container>
    <Wrapper>
      <Number>404</Number>
      <Text>We can't seem to find the page you're looking for.</Text>
      <StyledLink to={"/"}>Back to dashboard</StyledLink>
    </Wrapper>
  </Container>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Number = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 15px;
  margin: 3px 0px;
`;

const StyledLink = styled(Link).attrs({ className: "btn btn-xl btn-primary" })`
  margin-top: 40px;
`;

export default NoMatch;
