import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5em 3em;
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const HorizontalField = styled.div`
  display: flex;
  align-items: center;
`

const Field = styled.p`
  flex: 1;
  font-size: 1.3em;
  margin: 0.25rem;
`

const Icon = styled.i`

`

const HangingIcon = styled(Icon)`
  align-self: flex-end;
`

const Options = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Button = styled(Link)`
  align-self: center;
  width: 85%;
  padding: 0.5em 1em;
  border: 0;
  margin: 0.5em 0.5em 2em;
  background: ${props => props.theme.green};
  color: inherit;
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`

/*
class InputTrip extends Component {
  state = {
    modalOpen: false,
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
        <Input type="text" name="pickup" value={this.props.start} placeholder="Origen" onChange={(e) => this.props.changeLocation(true, e)}/>
        <Input type="text" name="destination" value={this.props.destination} placeholder="Destino" onChange={(e) => this.props.changeLocation(false, e)}/>
        <Button type="button" onClick={this.openModal}>Continuar</Button>
      </Form>
      <TripConfirmationModal isOpen={this.state.modalOpen} closeModal={this.closeModal} start={this.props.start} destination={this.props.destination}/>
    </Container>
  );
}
*/

const host = 'http://localhost:60123';

class Menu extends Component {
  state = {
    fname: '',
    lname: '',
    payment: [],
    tripsCount: 0,
  }

  componentDidMount() {
    console.log(host + '/client?clientID=' + this.props.clientID);
    axios.get(host + '/client?clientID=' + this.props.clientID).then(
      res => {
        this.setState( (state, props) => {
          return {
            fName: res.data.rows[0].fName,
            lName: res.data.rows[0].lName,
            payment: res.data.rows,
            tripsCount: res.data.rows.length,
          }
        })
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
    axios.get(host + '/rideByClient?clientID=' + this.props.clientID).then(
      res => {
        this.setState( (state, props) => {
          return {
            tripsCount: res.data.rows.length,
          }
        })
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  render = () => {
    
    var paymentList = this.state.payment.map( (card) => 
      <HorizontalField>
        <Field>**** {card.cardNo.toString().substring( card.cardNo.toString().length - 4, card.cardNo.toString().length )}</Field>
        <Icon className="fas fa-times fa-lg"/>
      </HorizontalField>
    );

    return(
    <Container>
      <Info>
        <HorizontalField>
          <Field><strong>Nombre:</strong> {this.state.fName + ' ' + this.state.lName}</Field>
          <Icon className="fas fa-pencil-alt fa-lg"/>
        </HorizontalField>
        <HorizontalField>
          <Field><strong>Ciudad:</strong> Monterrey</Field>
          <Icon className="fas fa-pencil-alt fa-lg"/>
        </HorizontalField>
        <HorizontalField>
          <Field><strong>Viajes realizados:</strong> {this.state.tripsCount}</Field>
        </HorizontalField>
      </Info>
      <Info>
        <HorizontalField>
          <Field><strong>Formas de pago:</strong></Field>
        </HorizontalField>
        {paymentList}
        <HangingIcon className="fas fa-plus-circle fa-lg"/>
      </Info>
      <Options>
        <Button to="/client/history">Ir a historial</Button>
        <Button to="/client/home">Guardar y salir</Button>
      </Options>
    </Container>
  )}
}

export default Menu;
