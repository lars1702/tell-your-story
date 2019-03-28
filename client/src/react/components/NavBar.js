import { NavLink } from 'react-router-dom'
import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import api from '../../api'

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }

  toggle() {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">
            <img src="/TYS-logo - Copy2.png" alt="logo" height="40px" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink className="text-light" to="/posts">Posts</NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center mx-3">
                <NavLink className="text-light" to="/write-post">Write post</NavLink>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownToggle className="text-light" nav caret>
                  {api.isLoggedIn() ?
                    "Account" :
                    "Login Options"}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
                  </DropdownItem>
                  <DropdownItem>
                    {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
                    {api.isLoggedIn() && <NavLink to="/" onClick={() => api.logout()}>Logout</NavLink>}
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/secret">Secret</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}