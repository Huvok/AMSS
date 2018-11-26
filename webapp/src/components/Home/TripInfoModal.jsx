import React from 'react';
import styled from 'styled-components';

import Modal from './Modal';

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

const ReturnButton = styled.button`
  align-self: end;
  padding: 0.5em;
  border: 0;
  background: transparent;
  font-size: 0.8em;
  cursor: pointer;
`

const TripInfoModal = ({ isOpen, closeModal }) => (
  <Modal isOpen={isOpen}>
    <Container>
      <Header>Información del viaje</Header>
      <Text>
        <Paragraph>Origen: Monterrey</Paragraph>
        <Paragraph>Destino: Guadalajara</Paragraph>
        <Paragraph>Chofer: Juan Ruíz</Paragraph>
        <Paragraph>ID Chofer: 1024</Paragraph>
        <Paragraph>Km: 140</Paragraph>
      </Text>
      <ReturnButton onClick={closeModal}>Cerrar</ReturnButton>
    </Container>
  </Modal>
);

export default TripInfoModal;
