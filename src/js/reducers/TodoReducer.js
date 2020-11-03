export default function TodoReducer(state, action) {
  switch (action.type) {
    case 'AddTodo':
      return state
    case 'CompleteTodo':
      alert('complete')
      return state
    default:
      return state
  }
}
