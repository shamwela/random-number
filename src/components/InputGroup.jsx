import React from 'react'
import './InputGroup.sass'

function InputGroup({ value, onChange, name }) {
  return (
    <div className='input-group'>
      <label htmlFor={name}>{name}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type='number'
        required
      />
    </div>
  )
}

export default InputGroup
