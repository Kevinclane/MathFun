import React from 'react';
import '../App.css';
import Difficulty from "./Difficulty";
import CorrectModal from "./CorrectModal"
import InCorrectModal from "./IncorrectModal"

class Missing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      start: false,
      correctModal: false,
      incorrectModal: false
    }
  }
  render() {
    if (this.state.start == false) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>In this game, you will need to find the missing number in the pattern. Press the button below when you're ready!</h1>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-lg btn-pink" onClick={() => this.start}>START!</button>
            </div>
          </div>
        </div>
      )
    } else return (
      <div>

      </div>
    )
  }

  start = () => {
    this.setState({
      start: true
    })
    this.randomPattern()
  }

  randomPattern = () => {
    let r = Math.random()
    if (r < 1 / 3) {
      this.generateConsecutive()
    } else if (r < 1 / 3 * 2) {
      this.generateEven()
    } else {
      this.generateOdd()
    }
  }
  generateConsecutive = () => {

  }
  generateEven = () => {

  }
  generateOdd = () => {

  }
}

export default Missing