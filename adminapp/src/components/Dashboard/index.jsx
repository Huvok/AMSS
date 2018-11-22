import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.black};
`

const Dashboard = () => (
  <Container>
    <Navbar/>
    <Switch>
      <Route exact path="/dashboard" render={() => (
        <h3>Manage taxis</h3>
      )}/>
      <Route path="/dashboard/survey" render={() => (
        <h3>Edit survey</h3>
      )}/>
      <Route path="/dashboard/pricerate" render={() => (
        <h3>Edit price rate</h3>
      )}/>
      <Route path="/dashboard/clients" render={() => (
        <h3>Manage clients</h3>
      )}/>
      <Route path="/dashboard/services" render={() => (
        <h3>Services</h3>
      )}/>
    </Switch>
  </Container>
);

export default Dashboard;
