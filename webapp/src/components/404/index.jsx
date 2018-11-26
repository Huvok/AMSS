import React from 'react';
import styled from 'styled-components';
import { Link as _Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.h1`
  font-size: 45vw;
  margin: 0;
`

const Paragraph = styled.p`
  margin: 1em 5%;
  text-align: center;
`

const Link = styled(_Link)`
  color: inherit;
`

const FourOFour = () => (
  <Container>
    <Header>404</Header>
    <Paragraph>Don't worry, you can head back to the home page down here:</Paragraph>
    <Link to="/">Click me!</Link>
  </Container>
);

export default FourOFour;
