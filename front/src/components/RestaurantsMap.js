import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { withRouter } from "react-router-dom";
import bubbleIcon from "../assets/img/bubbleIcon.png";

class RestaurantsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    };
  }

  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: 48.855269,
          lng: 2.345856
        }}
        zoom={13}
      >
        {/* {this.state.datas.lenght > 0 */}
        {this.props.restaurants.map((marker, index) => (
          <Marker
            key={index}
            name={"Your position"}
            position={{ lat: marker.latitude, lng: marker.longitude }}
            icon={bubbleIcon}
            style={{ color: "red" }}
          />
        ))}
      </Map>
    );
  }
}
export default withRouter(
  GoogleApiWrapper({
    apiKey: "AIzaSyBJWOhhYJVHkzShIFen7id4uZdFtooV4Xg"
  })(RestaurantsMap)
);
