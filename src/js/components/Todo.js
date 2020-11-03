import React, { useContext } from 'react'
import TodoContext from '../contexts/TodoContext'
import { completeTodo } from '../actions/TodoActions'

export default function Todo() {
  const { title, dispatch } = useContext(TodoContext)
  return (
    <div>
      <button onClick={() => completeTodo(dispatch)}>complete</button>
      <span>{title}</span>
    </div>
  )
}
