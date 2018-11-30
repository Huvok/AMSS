import React, { Component } from 'react';
import styled from 'styled-components';

import WaitingForTripModal from './WaitingForTripModal';
import TripInfoModal from './TripInfoModal';
import SurveyModal from './SurveyModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Button = styled.button`
  width: 80%;
  min-width: 10rem;
  padding: 0.5em 1em;
  border: 0;
  margin: 1em;
  background: ${props => props.theme.green};
  font-size: 1.4em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`

class CurrentlyInTrip extends Component {
  state = {
    modal: 1,
    timeout: null
  }

  componentDidMount = () => {
    this.state.timeout = setTimeout(() => {
      this.setState({ modal: 2 });
      setTimeout(() => {
        this.setState({ modal: 0 });
        setTimeout(() => {
          this.setState({ modal: 3 });
        }, 5000)
      }, 5000);
    }, 5000);
  }

  openModal = (number) => {
    this.setState({ modal: number });
  }

  closeModal = () => {
    this.setState({ modal: 0 });
  }

  cancelTrip = () => {
    clearTimeout(this.state.timeout);
    window.history.back()
  }

  render = () => (
    <Container>
      <WaitingForTripModal isOpen={this.state.modal === 1} cancelTrip={this.cancelTrip}/>
      <TripInfoModal isOpen={this.state.modal === 2} closeModal={this.closeModal} start={this.props.start} destination={this.props.destination}/>
      <SurveyModal isOpen={this.state.modal === 3} closeModal={this.cancelTrip}/>
      <Button onClick={() => this.openModal(1)}>Información del viaje</Button>
      <Button onClick={this.cancelTrip}>Cancelar</Button>
    </Container>
  )
}

export default CurrentlyInTrip;
