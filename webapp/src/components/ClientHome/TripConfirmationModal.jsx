import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

import Modal from '../Home/Modal';

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

const ModalInput = styled.input`
  padding: 0.5em;
  border: 0;
  margin: 0;
  border-bottom: 2px solid ${props => props.theme.lightgray};
  margin-bottom: 2em;
  background: transparent;
  font-size: inherit;
  width: 100%;
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

const ModalButton = styled.button`
  align-self: center;
  width: 10em;
  padding: 0.5em 1.5em;
  border: 0;
  margin: 0.5em;
  background: ${props => props.red ? props.theme.red : props.theme.green};
  font-size: inherit;
  font-weight: bold;
  cursor: pointer;
`

const Link = styled(_Link)`
  align-self: center;
`

const TripConfirmationModal = ({ isOpen, closeModal }) => (
  <Modal fullscreen isOpen={isOpen} closeModal={closeModal}>
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
          <Link onClick={closeModal} to="/client/home/trip">
            <ModalButton>Aceptar</ModalButton>
          </Link>
          <ModalButton onClick={closeModal} red>Rechazar</ModalButton>
        </Buttons>
      </TripDetails>
    </ModalContainer>
  </Modal>
)

export default TripConfirmationModal;
