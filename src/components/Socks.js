import React, { Component } from 'react';
import './App.css';


class Socks extends Component {

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
    if(this.state.count > 0) {
      return this.state.count - 1;
    } else{
      return 0;
    }
  };

  reset() {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className='split bottom' id='bottomSocks'>
        <h1>Socks</h1>
        <button className='dec button' onClick={(e) => this.decrement(e)}>-</button>
        <button className='inc button' onClick={(e) => this.increment(e)}>+</button>
        <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

export default Socks;
