import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

const Header = styled.h1`
  font-size: 2em;
  margin: 2rem auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`

const Input = styled.input`
  padding: 4px 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.lightgray};
  margin-bottom: 2em;
  background: transparent;
  font-size: inherit;
`

const LoginButton = styled(_Link)`
  align-self: center;
  width: 80%;
  padding: 0.7em 1em;
  color: inherit;
  background: ${props => props.theme.green};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
`

const Forgot = () => (
  <Container>
    <Header>Enviar contraseña por correo</Header>
    <Form>
      <Input type="text" name="email" placeholder="Correo electrónico" />
      <LoginButton to="/">Aceptar</LoginButton>
    </Form>
  </Container>
);

export default Forgot;
