import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Start from './components/Start';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import ClientHome from './components/ClientHome';
import ClientMenu from './components/ClientMenu';
import ClientHistory from './components/ClientHistory';
import TaxiHome from './components/TaxiHome';
import TaxiMenu from './components/TaxiMenu';
import TaxiHistory from './components/TaxiHistory';
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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"/>
    <Switch>
      <Route exact path="/" render={() => (
        <Start />
      )}/>
      <Route path="/clientLogin" render={() => (
        <Login homePath="/client/home"/>
      )}/>
      <Route path="/taxiLogin" render={() => (
        <Login homePath="/taxi/home"/>
      )}/>
      <Route path="/register" render={() => (
        <Register />
      )}/>
      <Route path="/forgot" render={() => (
        <Forgot />
      )}/>
      <Route path="/client/home" render={() => (
        <ClientHome />
      )}/>
      <Route path="/client/menu" render={() => (
        <ClientMenu client_id={1} />
      )}/>
      <Route path="/client/history" render={() => (
        <ClientHistory />
      )}/>
      <Route path="/taxi/home" render={() => (
        <TaxiHome />
      )}/>
      <Route path="/taxi/menu" render={() => (
        <TaxiMenu />
      )}/>
      <Route path="/taxi/history" render={() => (
        <TaxiHistory />
      )}/>
      <Route render={() => (
        <FourOFour />
      )}/>
    </Switch>
  </Container>
);

export default App;
