import React, { Component } from 'react';
import './App.css';

import { useCounter } from './Counter';


const Socks = () => {
  const {count, increment, decrement, reset} = useCounter('sock-counter')
  return (
    <div className='split bottom' id='bottomSocks'>
      <h1>Socks</h1>
      <button className='dec button' onClick={(e) => decrement(e)}>-</button>
      <button className='inc button' onClick={(e) => increment(e)}>+</button>
      <button className='reset button' onClick={(e) => reset(e)}>Reset</button>
      <h1 className='countTotal'>{count} Socks</h1>
    </div>
  );
}

export default Socks;
