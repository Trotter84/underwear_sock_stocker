import React, { Component } from 'react';
import './App.css';

import Underwear from './Underwear';
import Socks from './Socks';

class App extends Component {
  render() {
    return(
      <>
        <div id='desktopVersion'>
          <h1>This site works only for mobile</h1>
        </div>
        <div id='mobileVersion'>
        <Underwear />
        <Socks />
        </div>
      </>
    )
  }
}

export default App;
