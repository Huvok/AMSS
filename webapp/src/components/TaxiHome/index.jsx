import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

import SignOutModal from '../Home/SignOutModal';
// import Map from './Map';
import WaitingForTrip from './WaitingForTrip';
import FinishTrip from './FinishTrip';

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
`

const SignOutButton = styled(MenuButton)`
  left: auto;
  right: 1em;
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
    modal: false
  }

  openModal = () => {
    this.setState({ modal: true });
  }

  closeModal = () => {
    this.setState({ modal: false });
  }

  render = () => (
    <Container>
      <SignOutModal isOpen={this.state.modal} closeModal={this.closeModal}/>
      <MapWrapper>
        <MenuButton to="/taxi/menu"><i className="fas fa-bars fa-lg" /></MenuButton>
        <SignOutButton as="div" onClick={this.openModal}><i className="fas fa-sign-out-alt fa-lg" /></SignOutButton>
        {/* <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBKIANqW2c99S9CmfcoznjjSg5K5buel8E&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        /> */}
      </MapWrapper>
      <LowerBox>
        <Switch>
          <Route path="/taxi/home/trip" render={() => (
            <FinishTrip />
          )}/>
          <Route render={() => (
            <WaitingForTrip />
          )}/>
        </Switch>
      </LowerBox>
    </Container>
  )
}

export default Home;
