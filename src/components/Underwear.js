import React, { Component } from 'react';
import './App.css';


class Underwear extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset() {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className='split top' id='topUnderwear'>
        <h1>Underwear</h1>
        <button className='dec' onClick={(e) => this.decrement(e)}>-</button>
        <button className='inc' onClick={(e) => this.increment(e)}>+</button>
        <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

export default Underwear;
