import React, { useContext } from 'react'
import Context from './Context'
import { countUp } from './ActionCreator'

export default function Counter() {
  const { count, dispatch } = useContext(Context)
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => countUp(dispatch)}>count up</button>
    </div>
  )
}
