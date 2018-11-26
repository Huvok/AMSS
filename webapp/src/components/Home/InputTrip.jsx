import React, { Component } from 'react';
import styled from 'styled-components';

import TripConfirmationModal from './TripConfirmationModal';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2em;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 4px 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.lightgray};
  margin-bottom: 2em;
  background: transparent;
  font-size: inherit;
`

const Button = styled.button`
  align-self: center;
  padding: 0.5em 1.5em;
  border: 0;
  background: ${props => props.theme.green};
  font-size: 1.3em;
  font-weight: bold;
  cursor: pointer;
`

class InputTrip extends Component {
  state = {
    modalOpen: false
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
  }

  render = () => (
    <Container>
      <Form>
        <Input type="text" name="pickup" placeholder="Origen"/>
        <Input type="text" name="destination" placeholder="Destino"/>
        <Button type="button" onClick={this.openModal}>Continuar</Button>
      </Form>
      <TripConfirmationModal isOpen={this.state.modalOpen} closeModal={this.closeModal}/>
    </Container>
  );
}

export default InputTrip;
