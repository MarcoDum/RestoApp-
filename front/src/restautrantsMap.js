import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import bubbleIcon from './bubbleIcon.png'

const RestaurantsMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.datas.map((data, index) => (
      <Marker
        key={index}      
        position={{ lat: data.latitude, lng: data.longitude }}
        label={data.name}
        icon={bubbleIcon}
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
