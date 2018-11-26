import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = (props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 25.682548, lng: -100.313840 }}
  />
);

export default withScriptjs(withGoogleMap(Map));
