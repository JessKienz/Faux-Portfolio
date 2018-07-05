import React, { Component } from 'react';

import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Main from './components/Main';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;
