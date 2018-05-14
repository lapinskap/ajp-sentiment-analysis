import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const RenderNavBar = () => {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Link</NavLink>
          </NavItem>
                  <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }

  export default RenderNavBar;
