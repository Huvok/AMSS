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

const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 360px;
  padding: 1.5em 1em;
  border: 2px solid ${props => props.theme.green};
  background: ${props => props.theme.lightgreen};
`

const Label = styled.label`
  font-size: 0.7em;
  color: ${props => props.theme.lightgray};
`

const Input = styled.input`
  padding: 4px 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.lightgray};
  margin-bottom: 2em;
  background: transparent;
  font-size: inherit;
`

const RegisterButton = styled(_Link)`
  align-self: center;
  width: 7em;
  padding: 0.7em 1em;
  margin-top: 3em;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
`

const Login = () => (
  <Container>
    <Header>Login</Header>
    <LoginBox>
      <Label for='email'>Email</Label>
      <Input type='text' name='email'/>
      <Label for='password'>Password</Label>
      <Input type='password' name='password'/>
      <RegisterButton to="/home">Register</RegisterButton>
    </LoginBox>
  </Container>
);

export default Login;
