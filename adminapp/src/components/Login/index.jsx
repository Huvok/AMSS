import React from 'react';
import styled from 'styled-components';

import LoginBox from './LoginBox';

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

const Header = styled.h1`
  font-size: 2em;
  margin-bottom: 2em;
`

const Login = () => (
  <Container>
    <Header>Hello world</Header>
    <LoginBox />
  </Container>
);

export default Login;
