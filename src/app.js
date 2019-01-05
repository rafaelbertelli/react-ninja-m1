import React from 'react'
import Presentation from './presentation'
import Square from './square'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      name: 'Rafael',
      lastname: 'Borges',
      showPresentation: false,
      showSquare: false,
      showButtons: true,
      colors: ['yellow', 'orange', 'red', 'orange', 'yellow'],
      color: 'pink'
    }
  }

  handleClick = (color) => {
    this.setState({
      color
    })
  }

  render () {
    return (
      <div>
        {this.state.showButtons &&
          <div>
            <Square color={this.state.color} />
            {['pink', 'orange', 'black'].map(color => {
              return (
                <div key={color}>
                  <button onClick={() => this.handleClick(color)}>{color}</button>
                </div>
              )
            })}
          </div>
        }

        {this.state.showSquare &&
          <div>
            {this.state.colors.map((color, index) => {
              return (
                <Square key={index} color={color} />
              )
            })}

          </div>
        }

        {this.state.showPresentation &&
          <div>
            <Presentation />
            <Presentation {...this.state} />
            <Presentation name='João' />
            <Presentation name={[1, 2, 3]} />
          </div>
        }

      </div>
    )
  }
}

export default App
