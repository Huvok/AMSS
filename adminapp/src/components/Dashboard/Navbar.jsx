import React from 'react';
import styled from 'styled-components';
import { NavLink as _NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 5em;
  width: 90%;
  margin: 3em 0;
  background: ${props => props.theme.green};
`

const NavLink = styled(_NavLink)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: inherit;
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  &.active {
    background: ${props => props.theme.darkgreen};
  }
`

const Navbar = () => (
  <Container>
    <NavLink to="/dashboard" exact activeClassName="active">
      Administrar taxis
    </NavLink>
    <NavLink to="/dashboard/survey" activeClassName="active">
      Configuración de taxis
    </NavLink>
    <NavLink to="/dashboard/pricerate" activeClassName="active">
      Configuración de tarifa
    </NavLink>
    <NavLink to="/dashboard/clients" activeClassName="active">
      Administrar clientes
    </NavLink>
    <NavLink to="/dashboard/services" activeClassName="active">
      Servicios
    </NavLink>
  </Container>
);

export default Navbar;
