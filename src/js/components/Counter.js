import React, { useContext } from 'react'
import CounterContext from '../contexts/CounterContext'
import { countUp } from '../actions/CountUp'

export default function Counter() {
  const { count, dispatch } = useContext(CounterContext)
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => countUp(dispatch)}>count up</button>
    </div>
  )
}
