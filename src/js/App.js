import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import CounterContext from './contexts/CounterContext'
import CounterReducer from './reducers/CounterReducer'

export default function App() {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 })

  return (
    <div>
      <CounterContext.Provider value={{ ...state, dispatch }}>
        <Counter />
      </CounterContext.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
