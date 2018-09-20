import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CardList from "./CardList";
import RestaurantsMap from './restautrantsMap'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    axios
      .get("/restaurants?_limit=10")
      .then(response => {
        // handle success
        console.log(response.data);
        this.setState({
          datas: response.data
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Restos de Paris
            </Typography>
            <Link to="/"><Button color="inherit">Accueil</Button></Link>
            <Link to="/Login"><Button color="inherit">Login</Button></Link>
            <Link to="/Register"><Button color="inherit">Register</Button></Link>
          </Toolbar>
        </AppBar>
        {this.state.datas.length > 0 ? (
          <CardList datas={this.state.datas} />
        ) : (
          <CircularProgress />
        )}
        {this.state.datas.length > 0 ? (
          <RestaurantsMap
            datas={this.state.datas}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px`, width: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  }
}

export default App;
