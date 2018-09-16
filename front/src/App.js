import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import CardList from "./CardList";
import RestaurantsMap from './restautrantsMap'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
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
        <header>
          <h1>Restos de Paris</h1>
        </header>
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
