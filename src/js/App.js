import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import Todo from './components/Todo'
import TodoContext from './contexts/TodoContext'
import TodoReducer from './reducers/TodoReducer'

export default function App() {
  const [state, dispatch] = useReducer(TodoReducer, {})

  return (
    <div>
      <TodoContext.Provider value={{ ...state, dispatch }}>
        <Todo />
      </TodoContext.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
