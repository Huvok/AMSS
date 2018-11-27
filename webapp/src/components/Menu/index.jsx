import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5em 3em;
`

const Info = styled.div`
  flex: 1;
`

const HorizontalField = styled.div`
  display: flex;
  align-items: center;
`

const Field = styled.p`
  flex: 1;
  font-size: 1.3em;
  margin: 0.25rem;
`

const Icon = styled.i`

`

const HangingIcon = styled(Icon)`
  align-self: flex-end;
`

const Options = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Button = styled.button`
  align-self: center;
  width: 85%;
  padding: 0.5em 1em;
  border: 0;
  margin: 0.5em 0.5em 2em;
  background: ${props => props.theme.green};
  font-size: 1.3em;
  font-weight: bold;
  cursor: pointer;
`

const Menu = () => (
  <Container>
    <Info>
      <HorizontalField>
        <Field><strong>Nombre:</strong> Juan Perez</Field>
        <Icon className="fas fa-pencil-alt fa-lg"/>
      </HorizontalField>
      <HorizontalField>
        <Field><strong>Ciudad:</strong> Monterrey</Field>
        <Icon className="fas fa-pencil-alt fa-lg"/>
      </HorizontalField>
      <HorizontalField>
        <Field><strong>Viajes realizados:</strong> 4</Field>
      </HorizontalField>
    </Info>
    <Info>
      <HorizontalField>
        <Field><strong>Formas de pago:</strong></Field>
      </HorizontalField>
      <HorizontalField>
        <Field>****-****-**29</Field>
        <Icon className="fas fa-times fa-lg"/>
      </HorizontalField>
      <HorizontalField>
        <Field>****-****-**92</Field>
        <Icon className="fas fa-times fa-lg"/>
      </HorizontalField>
      <HangingIcon className="fas fa-plus-circle fa-lg"/>
    </Info>
    <Options>
      <Button>Ir a historial</Button>
      <Button>Guardar y salir</Button>
    </Options>
  </Container>
)

export default Menu;
