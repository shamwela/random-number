import React from 'react'
import './InputGroup.sass'

function InputGroup({ value, onChange, name, type = 'number' }) {
  return (
    <div className='input-group'>
      <label htmlFor={name}>Min</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
      />
    </div>
  )
}

export default InputGroup
