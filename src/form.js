import React, { Component } from 'react'

class Form extends Component {
  state = {
    value: 'Digite algo',
    checked: false,
<<<<<<< HEAD
    radio: '0',
    options: [{ id: 1, option: 'Opção 1' }, { id: 2, option: 'Opção 2' }, { id: 3, option: 'Opção 3' }],
    selected: 2,
    selecteds: [1, 3],
    tArea: 'blá blá blá, blá blá, blá...'
=======
    radio: '0'
>>>>>>> 8556af0219dbbdfabb84c25645063b4e1ecbe9fd
  }

  handleChange = (e) => this.setState({ value: e.target.value })

  handleCheck = () => this.setState({ checked: !this.state.checked })

<<<<<<< HEAD
  handleRadio = (e) => this.setState({ radio: e.target.value })

  handleSelect = (e) => this.setState({ selected: e.target.value})

  handleSelects = (e) => {
    this.setState({
      selecteds: [...e.target.options].filter(({selected}) => selected).map(({value}) => value)
    })
  }

  handleTArea = e => {
    this.setState({ tArea: e.target.value }, () => console.log(this.state.tArea))
  }

  handleForm = (e) => {
    e.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleForm}>
=======
  handleRadio = (e) => this.setState({ radio: e.target.value }, () => console.log(this.state))

  render () {
    return (
      <form>
>>>>>>> 8556af0219dbbdfabb84c25645063b4e1ecbe9fd
        <label>Nome:</label>
        <input type='text' value={this.state.value} onChange={this.handleChange} />

        <label>
          <input type='checkbox' checked={this.state.checked} onClick={this.handleCheck} />Checkbox
        </label>

        <input type='radio' name='rd' value='1' onClick={this.handleRadio} />Radio 1
        <input type='radio' name='rd' value='2' onClick={this.handleRadio} />Radio 2
<<<<<<< HEAD

        <select value={this.state.selected} onChange={this.handleSelect}>
          {this.state.options.map((obj, key) => <option key={key} value={obj.id}>{obj.option}</option>)}
        </select>

        <select multiple value={this.state.selecteds} onChange={this.handleSelects}>
          {this.state.options.map((obj, key) => <option key={key} value={obj.id}>{obj.option}</option>)}
        </select>

        <textarea value={this.state.tArea} onChange={this.handleTArea} />

        <button type='submit'>Enviar</button>
=======
>>>>>>> 8556af0219dbbdfabb84c25645063b4e1ecbe9fd
      </form>
    )
  }
}

export default Form
