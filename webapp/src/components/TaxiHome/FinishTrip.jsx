import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2em;
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

const FinishTrip = () => (
  <Container>
    <Button to="/taxi/home">Terminar viaje</Button>
  </Container>
)

export default FinishTrip;
