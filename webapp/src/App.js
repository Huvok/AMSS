import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

const Red = styled.div`
  height: 10em;
  width: 50%;
  background: red;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React NOOOOW
          </a>
          <Red />
        </header>
      </div>
    );
  }
}

export default App;
