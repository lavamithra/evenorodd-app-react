// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state

    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {displayText}</p>
          <button type="button" className="inc-btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
