import React from 'react'
import Lifecyle from './lifecycle';

class App extends React.Component {
  state = {
    lifecycle: false
  }

  render () {
    return (
      <div>
        {this.state.lifecycle && <Lifecyle />}
      </div>
    )
  }
}

export default App
