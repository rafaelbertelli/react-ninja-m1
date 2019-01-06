import React from 'react'
import Lifecyle from './lifecycle'
import Form from './form'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      lifecycle: false,
      form: true
    }
  }

  render () {
    return (
      <div>
        {this.state.lifecycle && <Lifecyle />}
        {this.state.form && <Form />}
      </div>
    )
  }
}

export default App
