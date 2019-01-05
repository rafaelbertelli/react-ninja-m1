import React from 'react'

const Square = ({ color }) => {
  return (
    <div style={{
      height: '100px',
      width: '100px',
      backgroundColor: color,
      display: 'inline-block'
    }} />
  )
}

Square.defaultProps = {
  color: '#000'
}

export default Square
