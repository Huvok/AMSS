import React from 'react';
import styled from 'styled-components';

import Modal from './Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1em;
  border: 4px solid ${props => props.theme.black};
`

const Header = styled.h3`
  align-self: center;
  font-size: 1.3em;
  text-align: center;
`

const Form = styled.form`
  flex: 1;
  display: flex;
  padding: 0 5%;
  flex-direction: column;
  justify-content: space-around;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`

const Label = styled.label`
  font-size: 1.3em;
  margin-bottom: 1rem;
`

const RadioDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
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

const Button = styled.button`
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

const SurveyModal = ({ isOpen, closeModal }) => (
  <Modal isOpen={isOpen} closeModal={closeModal} fullscreen>
    <Container>
      <Header>Encuesta de satisfacción</Header>
      <Form>
        <Field>
          <Label>Pregunta 1</Label>
          <RadioDiv>
            <Input type="radio" name="question1" value="1"/>
            <Input type="radio" name="question1" value="2"/>
            <Input type="radio" name="question1" value="3"/>
            <Input type="radio" name="question1" value="4"/>
            <Input type="radio" name="question1" value="5"/>
          </RadioDiv>
        </Field>
        <Field>
          <Label>Pregunta 2</Label>
          <RadioDiv>
            <Input type="radio" name="question2" value="1"/>
            <Input type="radio" name="question2" value="2"/>
            <Input type="radio" name="question2" value="3"/>
            <Input type="radio" name="question2" value="4"/>
            <Input type="radio" name="question2" value="5"/>
          </RadioDiv>
        </Field>
        <Field>
          <Label>Pregunta 3</Label>
          <RadioDiv>
            <Input type="radio" name="question3" value="1"/>
            <Input type="radio" name="question3" value="2"/>
            <Input type="radio" name="question3" value="3"/>
            <Input type="radio" name="question3" value="4"/>
            <Input type="radio" name="question3" value="5"/>
          </RadioDiv>
        </Field>
      </Form>
      <Button onClick={closeModal}>Enviar respuesta</Button>
    </Container>
  </Modal>
)

export default SurveyModal;
