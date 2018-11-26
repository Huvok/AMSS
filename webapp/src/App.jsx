import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Start from './components/Start';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import FourOFour from './components/404';

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
      <Route path="/(clientLogin|taxiLogin)" render={() => (
        <Login />
      )}/>
      <Route path="/register" render={() => (
        <Register />
      )}/>
      <Route path="/forgot" render={() => (
        <Forgot />
      )}/>
      <Route render={() => (
        <FourOFour />
      )}/>
    </Switch>
  </Container>
);

export default App;
