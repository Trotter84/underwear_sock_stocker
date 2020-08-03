import React from 'react';
import './App.css';

import { useCounter } from './Counter';


const Underwear = () => {
  const {count, increment, decrement, reset} = useCounter('underwear-counter')
  return (
    <div className='split top' id='topUnderwear'>
      <h1>Underwear</h1>
      <button className='dec button' onClick={(e) => decrement(e)}>-</button>
      <button className='inc button' onClick={(e) => increment(e)}>+</button>
      <button className='reset button' onClick={(e) => reset(e)}>Reset</button>
      <h1 className='countTotal'>{count} Underwear</h1>
    </div>
  );
}


export default Underwear;
