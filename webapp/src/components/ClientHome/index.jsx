import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

import SignOutModal from '../Home/SignOutModal';
import Map from '../Home/Map';
import CurrentlyInTrip from './CurrentlyInTrip';
import InputTrip from './InputTrip';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`

const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1em;
  left: 1em;
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
  background: ${props => props.theme.white};
  box-shadow: 0 2px 5px ${props => props.theme.lightgray};
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  z-index: 10;
`

const SignOutButton = styled(MenuButton)`
  left: auto;
  right: 1em;
  z-index: 10;
`

const MapWrapper = styled.div`
  flex: 1;
  background: lightblue;
`

const LowerBox = styled.div`
  height: 35%;
  box-shadow: 0 2px 5px ${props => props.theme.lightgray};
`

class Home extends Component {
  state = {
    modal: false,
    start: '',
    destination: ''
  }

  openModal = () => {
    this.setState({ modal: true });
  }

  closeModal = () => {
    this.setState({ modal: false });
  }

  locationHandler = (start, event) => {
    if (start) {
      this.setState({ start: event.target.value });
    } else {
      this.setState({ destination: event.target.value });
    }
  }

  render = () => (
    <Container>
      <SignOutModal isOpen={this.state.modal} closeModal={this.closeModal}/>
      <MapWrapper>
        <MenuButton to="/client/menu"><i className="fas fa-bars fa-lg" /></MenuButton>
        <SignOutButton as="div" onClick={this.openModal}><i className="fas fa-sign-out-alt fa-lg" /></SignOutButton>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBKIANqW2c99S9CmfcoznjjSg5K5buel8E&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapWrapper>
      <LowerBox>
        <Switch>
          <Route path="/client/home/trip" render={() => (
            <CurrentlyInTrip start={this.state.start} destination={this.state.destination}/>
          )}/>
          <Route render={() => (
            <InputTrip start={this.state.start} destination={this.state.destination} changeLocation={this.locationHandler}/>
          )}/>
        </Switch>
      </LowerBox>
    </Container>
  )
}

export default Home;
