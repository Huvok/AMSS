import React, { Component } from 'react';
import styled from 'styled-components';

import Modal from './Modal';

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

const SMContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const SMHeader = styled.h3`
  margin: 0 0 1.5em;
`

const SMText = styled.div`
  flex: 1;
  margin-bottom: 1.5em;
  font-size: 0.8em;
`

const SMParagraph = styled.p`
  margin: 0.25em 0;
`

const SMReturnButton = styled.button`
  align-self: end;
  padding: 0.5em;
  border: 0;
  background: transparent;
  font-size: 0.8em;
  cursor: pointer;
`

const BMContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1em;
  border: 4px solid ${props => props.theme.black};
`

const BMHeader = styled.h3`
  align-self: center;
  font-size: 1.3em;
  text-align: center;
`

const BMForm = styled.form`
  flex: 1;
  display: flex;
  padding: 0 5%;
  flex-direction: column;
  justify-content: space-around;
`

const BMField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`

const BMLabel = styled.label`
  font-size: 1.3em;
  margin-bottom: 1rem;
`

const BMRadioDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const BMInput = styled.input`
  appearance: none;
  position: relative;
  height: 2em;
  width: 2em;
  border: 2px solid ${props => props.theme.lightgray};
  border-radius: 50%;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0px solid ${props => props.theme.lightgray};
    border-radius: 50%;
    transition: 0.15s all ease;
  }

  &::after {
    content: "${props => props.value}";
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.3em;
    color: ${props => props.theme.lightgray};
  }

  &:checked::before {
    border-width: 6px;
  }
`

const BMButton = styled.button`
  align-self: center;
  width: 85%;
  padding: 0.5em 1em;
  border: 0;
  margin: 0.5em 0.5em 2em;
  background: ${props => props.theme.green};
  font-size: 1.3em;
  font-weight: bold;
  cursor: pointer;
`

class CurrentlyInTrip extends Component {
  state = {
    modal: 2
  }

  openModal = (number) => {
    this.setState({ modal: number });
  }

  closeModal = () => {
    this.setState({ modal: 0 });
  }

  render = () => (
    <Container>
      {/* Trip information modal */}
      <Modal isOpen={this.state.modal === 1}>
        <SMContainer>
          <SMHeader>Información del viaje</SMHeader>
          <SMText>
            <SMParagraph>Origen: Monterrey</SMParagraph>
            <SMParagraph>Destino: Guadalajara</SMParagraph>
            <SMParagraph>Chofer: Juan Ruíz</SMParagraph>
            <SMParagraph>ID Chofer: 1024</SMParagraph>
            <SMParagraph>Km: 140</SMParagraph>
          </SMText>
          <SMReturnButton onClick={this.closeModal}>Cerrar</SMReturnButton>
        </SMContainer>
      </Modal>
      {/* Survey modal */}
      <Modal isOpen={this.state.modal === 2} fullscreen>
        <BMContainer>
          <BMHeader>Encuesta de satisfacción</BMHeader>
          <BMForm>
            <BMField>
              <BMLabel>Pregunta 1</BMLabel>
              <BMRadioDiv>
                <BMInput type="radio" name="question1" value="1"/>
                <BMInput type="radio" name="question1" value="2"/>
                <BMInput type="radio" name="question1" value="3"/>
                <BMInput type="radio" name="question1" value="4"/>
                <BMInput type="radio" name="question1" value="5"/>
              </BMRadioDiv>
            </BMField>
            <BMField>
              <BMLabel>Pregunta 2</BMLabel>
              <BMRadioDiv>
                <BMInput type="radio" name="question2" value="1"/>
                <BMInput type="radio" name="question2" value="2"/>
                <BMInput type="radio" name="question2" value="3"/>
                <BMInput type="radio" name="question2" value="4"/>
                <BMInput type="radio" name="question2" value="5"/>
              </BMRadioDiv>
            </BMField>
            <BMField>
              <BMLabel>Pregunta 3</BMLabel>
              <BMRadioDiv>
                <BMInput type="radio" name="question3" value="1"/>
                <BMInput type="radio" name="question3" value="2"/>
                <BMInput type="radio" name="question3" value="3"/>
                <BMInput type="radio" name="question3" value="4"/>
                <BMInput type="radio" name="question3" value="5"/>
              </BMRadioDiv>
            </BMField>
          </BMForm>
          <BMButton onClick={this.closeModal}>Enviar respuesta</BMButton>
        </BMContainer>
      </Modal>
      {/* Main view */}
      <Button onClick={() => this.openModal(1)}>Información del viaje</Button>
      <Button onClick={() => this.openModal(2)}>Dummy: Ir a encuesta</Button>
    </Container>
  )
}

export default CurrentlyInTrip;
