import React, { Component } from 'react'
import './App.css';

import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div>
         <Header />
         <Hero />
         <Main />
      </div>
    );
  }
}

export default App;
