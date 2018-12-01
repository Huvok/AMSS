import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

const host = 'http://localhost:60123/rideByClient';

class History extends Component {

  state = {
    content: [],
  }

  componentDidMount = () => {
    console.log(host + '?clientID=' + this.props.clientID);
    axios.get(host + '?clientID=' + this.props.clientID).then(
      res => {
        console.log(res.data.rows);
        this.setState( (state, props) => {
          return {
            content: res.data.rows,
          }
        })
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  render = () => {
    var tripsList = this.state.content.map( (trip) => 
      <HistoryItem {...trip}/>
    );

    return (
      <Container>
        <Header>Historial</Header>
        <HistoryList>
          {tripsList}
        </HistoryList>
        <Button to="/client/menu">Regresar</Button>
      </Container>
    );
  }
}

export default History;
