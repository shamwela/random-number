import React, { Component } from 'react'
import './App.sass'

class App extends Component {
  state = {
    min: 1,
    max: 10,
  }

  componentDidMount = () => {
    this.generate()
  }

  handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    const valueInInteger = parseInt(value)

    this.setState({ [name]: valueInInteger })
  }

  generate = () => {
    let { min, max } = this.state

    if (min > max) [min, max] = [max, min]
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    this.setState({ result, min, max })
  }

  render() {
    const { generate, handleChange } = this
    const { result, min, max } = this.state

    return (
      <div id='container'>
        <div id='app'>
          <h1 id='title'>Random Number</h1>
          <form
            onSubmit={(event) => generate(event.preventDefault())}
            id='form'
          >
            <span id='result'>Result: {result}</span>
            <div className='input-group'>
              <label htmlFor='min'>Min</label>
              <input
                value={min}
                onChange={handleChange}
                name='min'
                id='min'
                type='number'
              ></input>
            </div>
            <div className='input-group'>
              <label htmlFor='max'>Max</label>
              <input
                value={max}
                onChange={handleChange}
                name='max'
                id='max'
                type='number'
              ></input>
            </div>
            <button type='submit'>Generate</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
