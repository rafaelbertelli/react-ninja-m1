import React from 'react'
import Presentation from './presentation'
import Square from './square'
import Timer from './timer'
import Button from './button'

class Lifecyle extends React.Component {
  constructor () {
    super()

    this.state = {
      name: 'Rafael',
      lastname: 'Borges',
      showPresentation: false,
      showSquare: false,
      showButtons: false,
      colors: ['yellow', 'orange', 'red', 'orange', 'yellow'],
      color: 'pink',
      showTimer: true,
      time: 0,
    }

    console.log('constructor')
  }

  componentWillMount = () => console.log('componentWillMount')

  componentDidMount = () => console.log('componentDidMount')

  componentWillUnmount = () => console.log('willUnmount')

  handleClick = (color) => {
    this.setState({
      color
    })
  }

  handleExibition = () => {
    this.setState({ showTimer: !this.state.showTimer })
  }

  handleTimer = (timer) => {
    this.setState({ time: this.state.time + timer })
  }

  render () {
    console.log('render')

    return (
      <div>

        <div>
          {this.state.showTimer && 
            <Timer time={this.state.time} />
          }

          <Button onClick={this.handleExibition}>{'Show / Hide'}</Button>
          <Button onClick={() => this.handleTimer(20)}>{'+ 20'}</Button>
        </div>

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

export default Lifecyle
