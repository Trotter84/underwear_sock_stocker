import React, { Component, useState } from 'react';

const useLocalStorage = (storageKey, initialValue) => {
  const restoredValue = React.useMemo(() => {
    try {
      const c = JSON.parse(localStorage.getItem(storageKey))
      return c
    } catch(e) {
      console.warn("failed to load state")
      return initialValue
    }
  }, [storageKey])
  const [value, setValue] = useState(restoredValue)
  React.useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value))
    } catch(e) {
      console.warn("failed to save state")
    }
  }, [storageKey, value])
  React.useEffect(() => {
    const interval = setInterval(() => {
      try {
        const c = JSON.parse(localStorage.getItem(storageKey))
        if (value !== c) setValue(c)
      } catch(e) {
        console.warn("failed to save state")
      }
    }, 500)
    return () => clearInterval(interval)
  }, [storageKey, value, setValue])
  return [value, setValue]
}

export const useCounter = (storageKey) => {
  const [count, setCount] = useLocalStorage(storageKey, 0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c > 0 ? c - 1 : 0)
  const reset = () => setCount(0)
  React.useEffect(() => {
    const handleKey = (e) => {
      if (["r"].some(k => k === e.key))  {
        e.preventDefault()
        reset()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [reset])
return {count, increment, decrement, reset}
}
