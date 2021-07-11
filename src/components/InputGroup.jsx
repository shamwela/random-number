import React from 'react'
import './InputGroup.sass'

function InputGroup({ value, onChange, name, label }) {
  return (
    <div className='input-group'>
      <label htmlFor={name}>{label}</label>
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
