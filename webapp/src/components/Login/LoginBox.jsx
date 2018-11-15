import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  height: 25em;
  width: 45%;
  background: ${props => props.theme.lightgreen};
`

const Credentials = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2em 4em 3em;
`

const Field = styled.div`
  font-size: 1.5em;
`

const Label = styled.p`
  margin: 0.5rem 0;
`

const Input = styled.input`
  width: 60%;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 4px;
  font-size: inherit;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border: 0;
  font-size: 1.5em;
  font-weight: bold;
  background: ${props => props.theme.green};
  color: inherit;
`

const LoginBox = (props) => (
  <Container>
    <Credentials>
      <Field>
        <Label>Email</Label>
        <Input type="text" name="email"/>
      </Field>
      <Field>
        <Label>Password</Label>
        <Input type="password" name="pwd"/>
      </Field>
    </Credentials>
    <Button type="button">Login</Button>
  </Container>
);

export default LoginBox;
