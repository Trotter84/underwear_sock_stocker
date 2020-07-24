import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <>
        <div id='desktopVersion'>
          <h1>This site works only for mobile</h1>
        </div>
        <div id='mobileVersion'>
          <h1>Mobile</h1>
        </div>
      </>
    )
  }
}

export default App;
