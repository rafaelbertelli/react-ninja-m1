import React from 'react'

const Presentation = props => {
  return (
    <div>
      <h1>Bem vindo, {props.name} {props.lastname}</h1>
    </div>
  )
}

Presentation.defaultProps = {
  name: 'The man',
  lastname: 'who sold the world'
}

export default Presentation
