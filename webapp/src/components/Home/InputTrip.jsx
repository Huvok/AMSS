import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

import Modal from './Modal';

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
  font-size: inherit;
  font-weight: bold;
  cursor: pointer;
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1em;
  border: 4px solid ${props => props.theme.black};
`

const Locations = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
`

const LocationText = styled.div`
  font-size: 1.5em;
`

const RideDetails = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`

const Label = styled.label`
  font-size: 0.7em;
  color: ${props => props.theme.lightgray};
`

const Select = styled.select``

const Option = styled.option``

const ModalInput = styled(Input)`
  width: 100%;
  padding: 0.5em;
  margin: 0;
`

const TripDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Metrics = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const MetricsText = styled.h3`
  margin: 0.2rem 0;
  font-size: 1.2em;
`

const Buttons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ModalButton = styled(Button)`
  width: 10em;
  margin: 0.5em;
  background: ${props => props.red ? '#ce1246' : props.theme.green};
`

const Link = styled(_Link)`
  align-self: center;
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
      <Modal fullscreen isOpen={this.state.modalOpen}>
        <ModalContainer>
          <Locations>
            <LocationText><strong>Origen</strong>: Monterrey</LocationText>
            <LocationText><strong>Destino</strong>: San Nicolás</LocationText>
          </Locations>
          <RideDetails>
            <Field>
              <Label>Vehículo</Label>
              <Select>
                <Option>Taxi: Versa</Option>
              </Select>
            </Field>
            <Field>
              <ModalInput type="number" min="1" max="4" placeholder="Asientos" required />
            </Field>
            <Field>
              <Label>Forma de pago</Label>
              <Select>
                <Option>Credito MasterCard ****5959</Option>
              </Select>
            </Field>
          </RideDetails>
          <TripDetails>
            <Metrics>
              <MetricsText>Distancia: 10.5km</MetricsText>
              <MetricsText>Costo: $your soul</MetricsText>
            </Metrics>
            <Buttons>
              <Link onClick={this.closeModal} to="/home/trip">
                <ModalButton>Aceptar</ModalButton>
              </Link>
              <ModalButton onClick={this.closeModal} red>Rechazar</ModalButton>
            </Buttons>
          </TripDetails>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default InputTrip;
