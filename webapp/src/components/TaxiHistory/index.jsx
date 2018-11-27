import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HistoryItem from './HistoryItem';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  padding: 2em;
`

const Header = styled.h2`
  text-align: center;
  margin: 0.5em 0;
`

const HistoryList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.lightgray};
  border-left: 0;
  border-right: 0;
  overflow: scroll;

  > div:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.lightgray};
  }
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

const content = [
  {
    date: '04/nov/98',
    client: 'D Hernandez',
    distance: 20,
    cost: 42
  },
  {
    date: '26/nov/18',
    client: 'J Perez',
    distance: 20,
    cost: 40
  },
  {
    date: '7/dec/18',
    client: 'M Sakurai',
    distance: 1000,
    cost: 2500
  },
  {
    date: '1/jan/10',
    client: 'someone',
    distance: 100,
    cost: 240
  }
]

const History = () => (
  <Container>
    <Header>Historial</Header>
    <HistoryList>
      {content.map((item, index) => (
        <HistoryItem {...item}/>
      ))}
    </HistoryList>
    <Button to="/taxi/menu">Regresar</Button>
  </Container>
)

export default History;
