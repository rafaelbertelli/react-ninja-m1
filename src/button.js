import React from 'react'

const Button = props => {
  const { onClick, children } = props

  return (
    <button onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
  onClick: React.PropTypes.func
}

export default Button
