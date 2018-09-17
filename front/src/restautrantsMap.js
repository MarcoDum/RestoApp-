import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const RestaurantsMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.datas.map((data, index) => (
      <Marker
        key={index}
        name={data.name}       
        position={{ lat: data.latitude, lng: data.longitude }}
      />
    ));

    return (
      <GoogleMap defaultZoom={13} center={{ lat: 48.8534, lng: 2.3488 }}>
        {markers}
      </GoogleMap>
    );
  })
);

export default RestaurantsMap;
