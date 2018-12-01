import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
`

const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 0.3em 0;
`

const HistoryItem = ({ rideID, source, destination, clientID, taxiID, baseQuota, distKm, fareRate, rideDate }) => (
  <Container>
    <Paragraph><strong>Origen:</strong> {source}</Paragraph>
    <Paragraph><strong>Destino:</strong> {destination}</Paragraph>
    <Paragraph><strong>Distancia:</strong> {distKm.toFixed(1)} km</Paragraph>
    <Paragraph><strong>Costo:</strong> ${(baseQuota + distKm * fareRate).toFixed(1)}</Paragraph>
    <Paragraph><strong>Fecha:</strong> {rideDate.toString().substring(0,10)}</Paragraph>
  </Container>
)

export default HistoryItem;
