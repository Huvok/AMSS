import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import Map from './Map';
import InputTrip from './InputTrip';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const MapWrapper = styled.div`
  flex: 1;
  background: lightblue;
`

const LowerBox = styled.div`
  height: 35%;
`

const Home = () => (
  <Container>
    <MapWrapper>
      {/* <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBKIANqW2c99S9CmfcoznjjSg5K5buel8E&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
    </MapWrapper>
    <LowerBox>
      <Switch>
        <Route path="/home" render={() => (
          <InputTrip />
        )}/>
      </Switch>
    </LowerBox>
  </Container>
);

export default Home;
