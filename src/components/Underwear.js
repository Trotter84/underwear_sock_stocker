import React, { Component } from 'react';
import Counter from './Counter';


class Underwear extends Component {

  render() {
    return (
      <Counter>
        {(counter) =>
          <div className='split top' id='topUnderwear'>
            <h1>Underwear</h1>
            <button className='dec button' onClick={(e) => counter.decrement(e)}>-</button>
            <button className='inc button' onClick={(e) => counter.increment(e)}>+</button>
            <button className='reset button' onClick={(e) => counter.reset(e)}>Reset</button>
            <h1 className='countTotal'>{counter.count} Underwear</h1>
          </div>
        }
      </Counter>
    );
  }
};

export default Underwear;
