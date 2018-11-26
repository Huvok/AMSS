import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Start from './components/Start';
import Login from './components/Login';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`

const App = () => (
  <Container>
    <Switch>
      <Route exact path="/" render={() => (
        <Start />
      )}/>
      <Route path="/clientLogin" render={() => (
        <Login />
      )}/>
    </Switch>
  </Container>
);

export default App;
