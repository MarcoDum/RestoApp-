import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import "./App.css";
import { Link } from 'react-router-dom';

import CardList from "./CardList";
import RestaurantsMap from "./restautrantsMap";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      datasFiltered: [],
      arrondissement: ""
    };
    this.filterArrondissement = this.filterArrondissement.bind(this);
  }

  componentDidMount() {
    axios
      .get("/restaurants?_limit=50")
      .then(response => {
        // handle success
        console.log(response.data);
        this.setState({
          datas: response.data,
          datasFiltered: response.data
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  getResto = () => {
    return this.state.datas;
  };
  filterArrondissement(n) {
    let arrondissement = n;
    let filtered = this.state.datas.filter(
      elt => elt.address2 === arrondissement
    );
    this.setState({
      datasFiltered: filtered
    });
  }

  handleHome() {
    this.setState({
      datasFiltered: this.state.datas
    });
  }

  render() {
    return (
      <div>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Restos de Paris</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              LOGIN
            </NavItem>
            <NavItem eventKey={2} href="#">
              LOGOUT
            </NavItem>
            <NavDropdown
              eventKey={3}
              title="Trier par arrondissement"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1} onClick={e => this.handleHome()}>
                Tous
              </MenuItem>
              <MenuItem
                eventKey={3.1}
                onClick={e => this.filterArrondissement("1er")}
              >
                1er
              </MenuItem>
              <MenuItem
                eventKey={3.2}
                onClick={e => this.filterArrondissement("2e")}
              >
                2ème
              </MenuItem>
              <MenuItem
                eventKey={3.3}
                onClick={e => this.filterArrondissement("3e")}
              >
                3ème
              </MenuItem>
              <MenuItem
                eventKey={3.4}
                onClick={e => this.filterArrondissement("4e")}
              >
                4ème
              </MenuItem>
              <MenuItem
                eventKey={3.5}
                onClick={e => this.filterArrondissement("5e")}
              >
                5ème
              </MenuItem>
              <MenuItem
                eventKey={3.6}
                onClick={e => this.filterArrondissement("6e")}
              >
                6ème
              </MenuItem>
              <MenuItem
                eventKey={3.7}
                onClick={e => this.filterArrondissement("7e")}
              >
                7ème
              </MenuItem>
              <MenuItem
                eventKey={3.8}
                onClick={e => this.filterArrondissement("8e")}
              >
                8ème
              </MenuItem>
              <MenuItem
                eventKey={3.9}
                onClick={e => this.filterArrondissement("9e")}
              >
                9ème
              </MenuItem>
              <MenuItem
                eventKey={3.11}
                onClick={e => this.filterArrondissement("10e")}
              >
                10ème
              </MenuItem>
              <MenuItem
                eventKey={3.12}
                onClick={e => this.filterArrondissement("11e")}
              >
                11ème
              </MenuItem>
              <MenuItem
                eventKey={3.13}
                onClick={e => this.filterArrondissement("12e")}
              >
                12ème
              </MenuItem>
              <MenuItem
                eventKey={3.14}
                onClick={e => this.filterArrondissement("13e")}
              >
                13ème
              </MenuItem>
              <MenuItem
                eventKey={3.15}
                onClick={e => this.filterArrondissement("14e")}
              >
                14ème
              </MenuItem>
              <MenuItem
                eventKey={3.16}
                onClick={e => this.filterArrondissement("15e")}
              >
                15ème
              </MenuItem>
              <MenuItem
                eventKey={3.17}
                onClick={e => this.filterArrondissement("16e")}
              >
                16ème
              </MenuItem>
              <MenuItem
                eventKey={3.18}
                onClick={e => this.filterArrondissement("17e")}
              >
                17ème
              </MenuItem>
              <MenuItem
                eventKey={3.19}
                onClick={e => this.filterArrondissement("18e")}
              >
                18ème
              </MenuItem>
              <MenuItem
                eventKey={3.21}
                onClick={e => this.filterArrondissement("19e")}
              >
                19ème
              </MenuItem>
              <MenuItem
                eventKey={3.22}
                onClick={e => this.filterArrondissement("20e")}
              >
                20ème
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <div className="container Margin">
          {this.state.datasFiltered.length > 0 ? (
            <CardList datas={this.state.datasFiltered} />
          ) : (
            <CircularProgress />
          )}
        </div>
        {this.state.datas.length > 0 ? (
          <RestaurantsMap
            datas={this.state.datasFiltered}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `600px`, width: `600px` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
