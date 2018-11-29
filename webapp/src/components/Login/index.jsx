import React, { Component } from 'react';
import styled from 'styled-components';
import { Link as _Link, Redirect } from 'react-router-dom';
import axios from 'axios';

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

const LoginButton = styled.button`
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

const Forgot = styled(_Link)`
  margin: 1rem;
  color: inherit;
  font-size: 1.2em;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
`

const CancelButton = styled(_Link)`
  position: absolute;
  bottom: 1.5em;
  right: 2em;
  color: inherit;
  text-decoration: none;
`

const host = 'http://localhost:60123/loginClient';

/*
app.post('/loginClient', function(req, res) {
    var email = req.body['email'];
    var passwd = req.body['passwd'];
    db_layer.postLoginClient(email, passwd, function(status) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(JSON.stringify({'status': status}));
    });
});

app.options('/loginClient', function(req, res) {
    var email = req.body['email'];
    var passwd = req.body['passwd'];
    db_layer.postLoginClient(email, passwd, function(status) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'content-type');
        res.send(JSON.stringify({'status': status}));
    });
});
*/

class Login extends Component {

  state = {
    email: '',
    passwd: '',
    auth: false,
  }

  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  passwdChangeHandler = (event) => {
    this.setState({
      passwd: event.target.value
    });
  }

  handleLogin = (event) => {
    event.preventDefault();

    var body = {
      email: this.state.email,
      passwd: this.state.passwd
    };
    axios.post(host, body).then(
      res => {
        if(res.data.status == 'OK'){
          this.setState({
            auth: true,
          });
        }
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  }

  render = () => {
    if(this.state.auth == true){
      return <Redirect to='/client/home'/>
    }

    return(
      <Container>
        <Header>Login</Header>
        <LoginBox>
          <Label for='email'>Email</Label>
          <Input type='text' value={this.state.email} name='email' onChange={this.emailChangeHandler}/>
          <Label for='password'>Password</Label>
          <Input type='password' value={this.state.passwd} name='password' onChange={this.passwdChangeHandler}/>
          <LoginButton onClick={this.handleLogin}>Login</LoginButton>
        </LoginBox>
        <Forgot to="/forgot">Recuperar contraseña</Forgot>
        <CancelButton to="/"><i className="fas fa-times fa-2x"/></CancelButton>
      </Container>
    );
  }
}

export default Login;
