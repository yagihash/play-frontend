export default function CounterReducer(state, action) {
  switch (action.type) {
    case 'countUp':
      return { count: state.count + 1 }
    default:
      return state
  }
}
