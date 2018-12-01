import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const Header = styled.h1`
  font-size: 2em;
  margin: 2rem auto;
`

const Buttons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Link = styled(_Link)`
  width: 10em;
  padding: 0.5em 1em;
  margin: 0.5em;
  background: ${props => props.theme.green};
  font-size: 1.3em;
  font-weight: bold;
  color: inherit;
  text-align: center;
  text-decoration: none;
`

const Divider = styled.hr`
  margin: 1.5em;
`

const Start = () => (
  <Container>
    <Header>Transpais</Header>
    <Buttons>
      <Link to="/clientLogin">Login</Link>
      <Link to="/register">Registrar</Link>
      <Divider />
      <Link to="/taxiLogin">Login Taxista</Link>
    </Buttons>
  </Container>
);

export default Start;
