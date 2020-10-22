import React from 'react';
import '../App.css';
import Difficulty from "./Difficulty";


class Addition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      difficulty: "",
      difficultySelect: true,
      userAnswer: ""
    }
  }
  // componentDidMount() {
  //   this.generateEasyProblem()
  // }


  render() {
    if (this.state.difficultySelect) {
      return (
        <Difficulty chooseDifficulty={this.chooseDifficulty} />
      )
    } else {

      return (
        <div className="container">
          <div>
            <i className="fa fa-arrow-left fa-3x cursor" aria-hidden="true" onClick={() => this.props.changeView("home")}></i>
          </div>
          <div className="row">
            <div className="col text-center number-text">
              {this.state.num1}
            </div>
            <div className="col text-center number-text">
              +
            </div>
            <div className="col text-center number-text">
              {this.state.num2}
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h1>Type your answer below</h1>
            </div>
          </div>
          <div className="row">
            <div className="col text-center ">
              <input className="answer-form" onKeyPress={this.checkAnswer} onChange={this.updateInput} value={this.state.userAnswer} />
            </div>
          </div>
          {this.state.userAnswer}
        </div>
      )
    }
  }

  generateEasyProblem = () => {
    this.setState({
      num1: Math.ceil(Math.random() * 10),
      num2: Math.ceil(Math.random() * 10)
    })
  }
  generateMediumProblem = () => {
    this.setState({
      num1: Math.ceil(Math.random() * 30),
      num2: Math.ceil(Math.random() * 30)
    })
  }
  generateHardProblem = () => {
    this.setState({
      num1: Math.ceil(Math.random() * 1000),
      num2: Math.ceil(Math.random() * 1000)
    })
  }
  checkAnswer = (e) => {
    if (e.key === "Enter") {
      const answer = parseInt(this.state.userAnswer)
      if (answer === this.state.num1 + this.state.num2) {

      } else { console.log("wrong") }
    }
  }

  updateInput = (e) => {
    this.setState({
      userAnswer: e.target.value
    })
  }
  chooseDifficulty = (choice) => {
    this.setState({
      difficulty: choice,
      difficultySelect: false
    })
    if (choice === "easy") {
      this.generateEasyProblem()
    } else if (choice === "medium") {
      this.generateMediumProblem()
    } else {
      this.generateHardProblem()
    }
  }
}
export default Addition