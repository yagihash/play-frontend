import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'
import Context from './Context'
import Reducer from './Reducer'

export default function App() {
  const [state, dispatch] = useReducer(Reducer, { count: 0 })

  return (
    <div>
      <Context.Provider value={{ ...state, dispatch }}>
        <Counter />
      </Context.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
