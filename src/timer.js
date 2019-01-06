import React, { Component } from 'react'

export default class Timer extends Component {
  state = {
    timer: 0
  }

  chrono = () => {
    this.interval = setInterval(() => {
      this.state.timer < 50
       ? (this.setState({ timer: this.state.timer + 1 }))
       : clearInterval(this.interval)
    }, 1000)
  }

  componentDidMount = () => {
    this.chrono()
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('componentWillReceiveProps', this.props, nextProps)
    this.setState({ timer: this.state.timer + nextProps.time })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate', prevProps, prevState)
  }

  render() {
    console.log('render')
    return (
      <div>
        <p>{this.state.timer}</p>
      </div>
    )
  }
}
