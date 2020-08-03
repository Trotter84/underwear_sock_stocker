import React, { Component } from 'react';


class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  decrement() {
    this.setState(state => ({
      count: state.count > 0 ? state.count - 1 : 0
    }));
};

  reset() {
    this.setState({
      count: 0
    });
  };

  render() {
    return this.props.children({
      increment: () => this.increment(),
      decrement: () => this.decrement(),
      reset: () => this.reset(),
      count: this.state.count
    })
  }
};

export default Counter;
