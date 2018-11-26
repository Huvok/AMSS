import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2em;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 4px 0;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.lightgray};
  margin-bottom: 2em;
  background: transparent;
  font-size: inherit;
`

const Button = styled.button`
  align-self: center;
  padding: 0.5em 1.5em;
  border: 0;
  background: ${props => props.theme.green};
  font-size: inherit;
  font-weight: bold;
  cursor: pointer;
`

const InputTrip = () => (
  <Container>
    <Form>
      <Input type="text" name="pickup" placeholder="Origen"/>
      <Input type="text" name="destination" placeholder="Destino"/>
      <Button type="button">Continuar</Button>
    </Form>
  </Container>
);

export default InputTrip;
