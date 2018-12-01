import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

const theme = {
  black: '#23303f',
  lightgray: '#828ca4',
  lightgreen: '#aaf3cb',
  red: '#ce1246',
  green: '#14ce66',
  darkgreen: '#158938',
  white: '#fff'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
