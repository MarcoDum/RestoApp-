import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../assets/css/App.css";
import CardList from "./CardList";
import RestaurantsMap from "./RestaurantsMap";
import NavbarItem from "./NavbarItem";
import Login from "./Login";
import Register from "./Register";
import { withRouter, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurantsFiltered: [],
      arrondissement: "",
      loading: true
    };
    this.filterArrondissement = this.filterArrondissement.bind(this);
  }

  componentDidMount() {
    // init.InitDb();
    fetch("/api/restaurants", {
      method: "get"
    })
      .then(res => res.json(), err => this.setState({ flash: err.flash }))
      .then(e =>
        this.setState({
          restaurants: e,
          restaurantsFiltered: e,
          loading: false
        })
      );
  }

  getResto = () => {
    return this.state.datas;
  };
  filterArrondissement(n) {
    let arrondissement = n;
    let filtered = this.state.restaurants.filter(
      elt => elt.address2 === arrondissement
    );
    arrondissement === "tous"
      ? this.setState({
          restaurantsFiltered: this.state.restaurants
        })
      : this.setState({
          restaurantsFiltered: filtered
        });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavbarItem filterArrondissement={this.filterArrondissement} />
        <div>
          {this.state.loading ? (
            <div className={classes.spinner}>
              <CircularProgress size={100} thickness={5} />
            </div>
          ) : (
            <Switch>
              <Route exact path="/login" render={props => <Login />} />
              <Route exact path="/register" render={props => <Register />} />

              <Route
                path="/map"
                render={props => (
                  <RestaurantsMap
                    restaurants={this.state.restaurantsFiltered}
                    {...props}
                  />
                )}
              />
              <Route
                path="/"
                render={props => (
                  <CardList
                    restaurants={this.state.restaurantsFiltered}
                    {...props}
                  />
                )}
              />
            </Switch>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(App));
