import React, { Component } from 'react';
import Counter from './Counter';


class Socks extends Component {

  render() {
    return (
      <Counter>
        {(counter) =>
          <div className='split bottom' id='bottomSocks'>
            <h1>Socks</h1>
            <button className='dec button' onClick={(e) => counter.decrement(e)}>-</button>
            <button className='inc button' onClick={(e) => counter.increment(e)}>+</button>
            <button className='reset button' onClick={(e) => counter.reset(e)}>Reset</button>
            <h1 className='countTotal'>{counter.count} Socks</h1>
          </div>
        }
      </Counter>
    );
  }
};

export default Socks;
