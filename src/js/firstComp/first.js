import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tracy'
    }
  }

  render () {
    return (
      <div></div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
