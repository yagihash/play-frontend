import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Layout extends React.Component {
  render() {
    return <div>Hello</div>
  }
}

const app = document.querySelector('#app')
ReactDOM.render(<Layout />, app)
