import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';
import axios from 'axios';

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

const host = 'http://localhost:60123/client?clientID=1';

class TripConfirmationModal extends Component {

  state = {
    payment: [],
    baseQuota: 0,
    distance: 0,
    fareRate: 0,
    price: 0,
  }

  componentDidMount() {
    axios.get(host).then(
      res => {
        this.setState( (state, props) => {
          return {
            payment: res.data.rows,
          }
        });
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
    this.getTripDetails();
  }

  getTripDetails = () => {
    axios.get('http://localhost:60123/fareService').then(
      res => {
        this.setState( (state, props) => {
          return {
            baseQuota: res.data.baseQuota,
            distance: res.data.distance,
            fareRate: res.data.fareRate,
            price: res.data.price,
          }
        });
        this.props.changeFare(this.state.distance, this.state.baseQuota, this.state.fareRate, this.state.price);
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  render = () => {

    var paymentList = this.state.payment.map( (card) => 
      <Option>Credito MasterCard **** {card.cardNo.toString().substring( card.cardNo.toString().length - 4, card.cardNo.toString().length )}</Option>
    );

    return (
      <Modal fullscreen isOpen={this.props.isOpen} closeModal={this.props.closeModal}>
        <ModalContainer>
          <Locations>
            <LocationText><strong>Origen</strong>: {this.props.start}</LocationText>
            <LocationText><strong>Destino</strong>: {this.props.destination}</LocationText>
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
                {paymentList}
              </Select>
            </Field>
          </RideDetails>
          <TripDetails>
            <Metrics>
              <MetricsText>Distancia: {this.state.distance.toFixed(1)} km</MetricsText>
              <MetricsText>Costo: ${this.state.price.toFixed(1)}</MetricsText>
            </Metrics>
            <Buttons>
              <Link onClick={this.props.closeModal} to="/client/home/trip">
                <ModalButton>Aceptar</ModalButton>
              </Link>
              <ModalButton onClick={this.props.closeModal} red>Cancelar</ModalButton>
            </Buttons>
          </TripDetails>
        </ModalContainer>
      </Modal>
    );
  }
}

export default TripConfirmationModal;
