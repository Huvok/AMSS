import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Modal from '../Home/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const Header = styled.h3`
  margin: 0 0 1.5em;
`

const Text = styled.div`
  flex: 1;
  margin-bottom: 1.5em;
  font-size: 0.8em;
`

const Paragraph = styled.p`
  margin: 0.25em 0;
`

const ReturnButton = styled(Link)`
  align-self: end;
  padding: 0.5em;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 0.8em;
  text-decoration: none;
  cursor: pointer;
`

const NewTripModal = ({ isOpen, closeModal }) => (
  <Modal isOpen={isOpen} closeModal={closeModal}>
    <Container>
      <Header>Nuevo viaje</Header>
      <Text>
        <Paragraph>Cliente: Juan Ruíz</Paragraph>
        <Paragraph>ID Cliente: 1024</Paragraph>
        <Paragraph>Origen: Monterrey</Paragraph>
        <Paragraph>Destino: Guadalajara</Paragraph>
        <Paragraph>Km: 140</Paragraph>
      </Text>
      <ReturnButton onClick={closeModal} to="/taxi/home/trip">Aceptar</ReturnButton>
    </Container>
  </Modal>
)

export default NewTripModal;
