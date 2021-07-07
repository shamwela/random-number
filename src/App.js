import React, { Component } from 'react'
class App extends Component {
  state = {
    result: null,
    min: 1,
    max: 10,
  }

  componentDidMount() {
    this.handleSubmit()
  }

  handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { min, max } = this.state
    const result = Math.floor(Math.random() * (max - min + 1) + min)
    this.setState({ result })
  }

  render() {
    const { handleSubmit, handleChange } = this
    const { result, min, max } = this.state

    return (
      <div id='app'>
        <h1>Random Number</h1>
        <form onSubmit={(event) => handleSubmit(event.preventDefault)}>
          <h2>Result: {result}</h2>

          <label htmlFor='min'></label>
          <input
            value={min}
            onChange={handleChange}
            name='min'
            id='min'
            type='number'
            min='1'
            max='1000'
          ></input>

          <label htmlFor='max'></label>
          <input
            value={max}
            onChange={handleChange}
            name='max'
            id='max'
            type='number'
            min='1'
            max='1000'
          ></input>

          <button type='submit'>Generate</button>
        </form>
      </div>
    )
  }
}

export default App
