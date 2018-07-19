import React from "react";
import {
  Media,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Container,
  Dropdown
} from "reactstrap";
import styled from "styled-components";
import FaCog from "react-icons/lib/fa/cog";
import MdPageview from "react-icons/lib/md/pageview";
import FaPowerOff from "react-icons/lib/fa/power-off";

export default class RenderNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Navbar expand="md" style={{ padding: "0" }}>
        <Logo>
          <Media object src="image/logo-white.png" />
        </Logo>
        <Container>
          <Row>
            <Nav navbar style={{ marginLeft: "110px" }}>
              <NavItems>
                <BottomText href={"/dashboard"}>
                  <MdPageview /> PAGE TEST
                </BottomText>
              </NavItems>
              <NavItemsEnd>
                <BottomText href={"/profile"}>
                  <FaCog /> SETTINGS
                </BottomText>
              </NavItemsEnd>
            </Nav>
          </Row>
        </Container>

        <UncontrolledDropdownX
          inNavbar={true}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggleX nav>
            <Media
              style={{ marginRight: "10px" }}
              object
              src="image/edyta.png"
            />
            edyta@pqstudio.pl
          </DropdownToggleX>

          <DropdownMenuZ>
            <DropdownItemY href={"/profile"}>
              <FaCog style={{ margin: "5px", marginBottom: "7px" }} /> Settings
            </DropdownItemY>
            <DropdownItemY href={"/signin"}>
              <FaPowerOff style={{ margin: "5px", marginBottom: "7px" }} /> Log
              out
            </DropdownItemY>
          </DropdownMenuZ>
        </UncontrolledDropdownX>
      </Navbar>
    );
  }
}

const Logo = styled.div`
  background-color: #9585c4;
  padding: 20px 25px;
`;

const BottomText = styled(NavLink)`
  color: #7387a9;
  font-weight: 600;
  font-size: 14px;
`;

const NavItems = styled(NavItem)`
  padding: 12px 40px;
  border-left: 2px solid #ebf2fa;
  border-top: 2px solid #ebf2fa;
  border-bottom: 2px solid #ebf2fa;
  &:hover {
    border-bottom: 2px solid #4ec2e2;
  }
`;

const NavItemsEnd = styled(NavItem)`
  padding: 12px 40px;
  border: 2px solid #ebf2fa;
  &:hover {
    border-bottom: 2px solid #4ec2e2;
  }
`;

const UncontrolledDropdownX = styled(Dropdown)`
  width: 400px;
  font-weight: 500;
  padding: 0px 20px;
  border-left: 1px solid #eee;
`;

const DropdownMenuZ = styled(DropdownMenu)`
  border-top: 0;
  background-color: #fff;
  width: 100%;
  border-radius: 3px;
`;

const DropdownItemY = styled(DropdownItem)`
  border-top: 0;
  color: #94a2bf;
  &:hover svg {
    color: #4ec2e2;
  }
`;

const DropdownToggleX = styled(DropdownToggle)`
  color: #94a2bf;
`;
