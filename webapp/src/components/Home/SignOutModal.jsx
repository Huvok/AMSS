import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

import Modal from './Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Question = styled.p`
  text-align: center;
`

const TwoButtons = styled.div`
  display: flex;
`

const Button = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0;
  margin: 0.5em 0.25em;
  border: 0;
  background: ${props => props.red ? props.theme.red : props.theme.green};
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
`

const Link = styled(_Link)`
  flex: 1;
  display: flex;
  color: inherit;
  text-decoration: none;
`

const SignOutModal = ({ isOpen, closeModal }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <Container>
      <Question>¿Seguro que quieres cerrar la sesión?</Question>
      <TwoButtons>
        <Button onClick={closeModal} red>No</Button>
        <Link to="/">
          <Button onClick={closeModal}>Sí</Button>
        </Link>
      </TwoButtons>
    </Container>
  </Modal>
)

export default SignOutModal;
