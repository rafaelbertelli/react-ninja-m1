import React from 'react'
import Presentation from './presentation'

class App extends React.Component {

  state = {
    name: 'Rafael',
    lastname: 'Borges'
  }

  render () {
    return (
      <div>
        <Presentation />
        <Presentation { ...this.state } />
        <Presentation name='João' />
        <Presentation name={[1,2,3]} />
      </div>
    )
  }
}

export default App
