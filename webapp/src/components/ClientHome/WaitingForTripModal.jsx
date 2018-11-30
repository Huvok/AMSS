import React from 'react';
import styled from 'styled-components';

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

const CancelButton = styled.button`
  align-self: end;
  padding: 0.5em;
  border: 0;
  background: transparent;
  font-size: 0.8em;
  cursor: pointer;
`

const WaitingForTripModal = ({ isOpen, cancelTrip }) => (
  <Modal isOpen={isOpen}>
    <Container>
      <Header>Estamos buscando un chofer</Header>
      <Text>
        <Paragraph>Esto no debe tardar mucho.</Paragraph>
      </Text>
      <CancelButton onClick={cancelTrip}>Cancelar</CancelButton>
    </Container>
  </Modal>
);

export default WaitingForTripModal;
