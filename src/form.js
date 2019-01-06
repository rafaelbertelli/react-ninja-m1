import React, { Component } from 'react'

class Form extends Component {
  state = {
    value: 'Digite algo',
    checked: false,
    radio: '0'
  }

  handleChange = (e) => this.setState({ value: e.target.value })

  handleCheck = () => this.setState({ checked: !this.state.checked })

  handleRadio = (e) => this.setState({ radio: e.target.value }, () => console.log(this.state))

  render () {
    return (
      <form>
        <label>Nome:</label>
        <input type='text' value={this.state.value} onChange={this.handleChange} />

        <label>
          <input type='checkbox' checked={this.state.checked} onClick={this.handleCheck} />Checkbox
        </label>

        <input type='radio' name='rd' value='1' onClick={this.handleRadio} />Radio 1
        <input type='radio' name='rd' value='2' onClick={this.handleRadio} />Radio 2
      </form>
    )
  }
}

export default Form
