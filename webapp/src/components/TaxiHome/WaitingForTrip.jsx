import React, { Component } from 'react';
import styled from 'styled-components';

import NewTripModal from './NewTripModal';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2em;
`

const Paragraph = styled.p`
  font-size: 1.3em;
  text-align: center;
`

class WaitingForTrip extends Component {
  state = {
    modalOpen: true
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render = () => (
    <Container>
      <Paragraph>Esperando viaje...</Paragraph>
      <NewTripModal isOpen={this.state.modalOpen} closeModal={this.closeModal}/>
    </Container>
  )
}

export default WaitingForTrip;
