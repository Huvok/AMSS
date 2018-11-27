import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
`

const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 0.3em 0;
`

const HistoryItem = ({ date, driver, distance, cost }) => (
  <Container>
    <Paragraph><strong>Fecha:</strong> {date}</Paragraph>
    <Paragraph><strong>Chofer:</strong> {driver}</Paragraph>
    <Paragraph><strong>Distancia:</strong> {distance}km</Paragraph>
    <Paragraph><strong>Costo:</strong> ${cost}</Paragraph>
  </Container>
)

export default HistoryItem;
