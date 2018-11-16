import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';

const Container = styled.div`
  height: 100%;
  width: 100%;
`

class App extends Component {
  render = () => (
    <Container>
      <Switch>
        <Route exact path="/" render={() => (
          <Login/>
        )}/>
        <Route render={() => (
          <Dashboard/>
        )}/>
      </Switch>
    </Container>
  );
}

export default App;
