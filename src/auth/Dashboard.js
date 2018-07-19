import React, { Component } from "react";
import styled from "styled-components";
import MainTemplate from "./MainTemplate";
import { sleep } from "../lib/utils";
import RenderNavbar from "../components/menu/Navbar";

import { Button, Media, InputGroup, InputGroupAddon, Input } from "reactstrap";

class Dashboard extends Component {
  onSubmit = async data => {
    await sleep(2000);
    console.log(data);
  };

  render() {
    return (
      <div>
        <RenderNavbar />
        <HeadText>Test your website</HeadText>
        <ViewDiv>
          <MainTemplate>
            <Footer>
              <NameText>Try the URL:</NameText>{" "}
              <Line>
                <InputGroup>
                  <Input />
                  <InputGroupAddon addonType="append">
                    <Button color="primary">Analyse</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Line>
            </Footer>
          </MainTemplate>
        </ViewDiv>
        <ViewDiv>
          <MainTemplate>
            <Footer>
              <BottomText>SCORE RANGE:</BottomText> <PointRed />{" "}
              <HeaderText>Negative (-1 – -0,75)</HeaderText> <PointOrange />{" "}
              <HeaderText>Neutral (-0,75 – 0,25)</HeaderText> <PointGreen />{" "}
              <HeaderText>Positive (0,25 – 1,0)</HeaderText>
            </Footer>
          </MainTemplate>
        </ViewDiv>
        <BottomDiv>
          <MainTemplate>
            <Footer className="row">
              <div className="col-8" />
              <Score className="col-4">
                <Media object src="image/score.png" />
              </Score>
            </Footer>
          </MainTemplate>
        </BottomDiv>
      </div>
    );
  }
}

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameText = styled.div`
  color: #7387a9;
  font-weight: 400;
  padding: 8px 0px 0px 0px;
  font-size: 15px;
  margin-left: 10px;
`;

const HeaderText = styled.div`
  color: #7387a9;
  font-weight: 600;
  padding: 8px 0px 0px 0px;
  font-size: 15px;
  margin-left: -55px;
`;

const BottomText = styled.div`
  color: #7387a9;
  font-weight: 600;
  padding: 8px 0px 0px 15px;
  font-size: 15px;
`;

const Line = styled.div`
  width: 670px;
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
  font-size: 15px;
  width: 900px;
  margin: 40px auto 10px auto;
`;

const BottomDiv = styled.div`
  width: 1030px;
  margin: 15px auto 0px auto;
  padding: 30px 80px 35px 30px;
`;

const Score = styled.div`
  background-color: #feffff;
  border: 1px solid #ebf2fa;
  border-radius: 3px;
  box-shadow: 0px 2px 10px 0px rgba(233, 233, 233, 0.5);
  height: 100px;
  padding: 15px 0px 0px 30px;
`;

const PointRed = styled.div`
  background-color: red;
  width: 17px;
  height: 17px;
  margin: 5px 0 0 0;
  border-radius: 50%;
`;

const PointOrange = styled.div`
  background-color: orange;
  width: 17px;
  height: 17px;
  margin: 5px 0 0 0;
  border-radius: 50%;
`;

const PointGreen = styled.div`
  background-color: LimeGreen;
  width: 17px;
  height: 17px;
  margin: 5px 0 0 0;
  border-radius: 50%;
`;
export default Dashboard;
