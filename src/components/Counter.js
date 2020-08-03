import React, { Component, useState } from 'react';


export const useCounter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c > 0 ? c - 1 : 0)
  const reset = () => setCount(0)
return {count, increment, decrement, reset}
}
