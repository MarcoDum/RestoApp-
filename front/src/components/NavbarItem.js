import React, { Component } from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";

class NavbarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Restos de Paris</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/login">
            LOGIN
          </NavItem>
          <NavItem eventKey={2} href="/map">
            CARTE
          </NavItem>
          <NavDropdown
            eventKey={3}
            title="Trier par arrondissement"
            id="basic-nav-dropdown"
          >
            <MenuItem
              eventKey={3.1}
              onClick={e => this.props.filterArrondissement("tous")}
            >
              Tous
            </MenuItem>
            <MenuItem
              eventKey={3.1}
              onClick={e => this.props.filterArrondissement("1er")}
            >
              1er
            </MenuItem>
            <MenuItem
              eventKey={3.2}
              onClick={e => this.props.filterArrondissement("2e")}
            >
              2ème
            </MenuItem>
            <MenuItem
              eventKey={3.3}
              onClick={e => this.props.filterArrondissement("3e")}
            >
              3ème
            </MenuItem>
            <MenuItem
              eventKey={3.4}
              onClick={e => this.props.filterArrondissement("4e")}
            >
              4ème
            </MenuItem>
            <MenuItem
              eventKey={3.5}
              onClick={e => this.props.filterArrondissement("5e")}
            >
              5ème
            </MenuItem>
            <MenuItem
              eventKey={3.6}
              onClick={e => this.props.filterArrondissement("6e")}
            >
              6ème
            </MenuItem>
            <MenuItem
              eventKey={3.7}
              onClick={e => this.props.filterArrondissement("7e")}
            >
              7ème
            </MenuItem>
            <MenuItem
              eventKey={3.8}
              onClick={e => this.props.filterArrondissement("8e")}
            >
              8ème
            </MenuItem>
            <MenuItem
              eventKey={3.9}
              onClick={e => this.props.filterArrondissement("9e")}
            >
              9ème
            </MenuItem>
            <MenuItem
              eventKey={3.11}
              onClick={e => this.props.filterArrondissement("10e")}
            >
              10ème
            </MenuItem>
            <MenuItem
              eventKey={3.12}
              onClick={e => this.props.filterArrondissement("11e")}
            >
              11ème
            </MenuItem>
            <MenuItem
              eventKey={3.13}
              onClick={e => this.props.filterArrondissement("12e")}
            >
              12ème
            </MenuItem>
            <MenuItem
              eventKey={3.14}
              onClick={e => this.props.filterArrondissement("13e")}
            >
              13ème
            </MenuItem>
            <MenuItem
              eventKey={3.15}
              onClick={e => this.props.filterArrondissement("14e")}
            >
              14ème
            </MenuItem>
            <MenuItem
              eventKey={3.16}
              onClick={e => this.props.filterArrondissement("15e")}
            >
              15ème
            </MenuItem>
            <MenuItem
              eventKey={3.17}
              onClick={e => this.props.filterArrondissement("16e")}
            >
              16ème
            </MenuItem>
            <MenuItem
              eventKey={3.18}
              onClick={e => this.props.filterArrondissement("17e")}
            >
              17ème
            </MenuItem>
            <MenuItem
              eventKey={3.19}
              onClick={e => this.props.filterArrondissement("18e")}
            >
              18ème
            </MenuItem>
            <MenuItem
              eventKey={3.21}
              onClick={e => this.props.filterArrondissement("19e")}
            >
              19ème
            </MenuItem>
            <MenuItem
              eventKey={3.22}
              onClick={e => this.props.filterArrondissement("20e")}
            >
              20ème
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarItem;
