import React from 'react';
import '../App.css';
import Difficulty from "./Difficulty";
import CorrectModal from "./CorrectModal"
import InCorrectModal from "./IncorrectModal"


class Subtraction extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      difficulty: "",
      difficultySelect: true,
      userAnswer: "",
      correctModal: false,
      incorrectModal: false
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
          <div className="row d-flex justify-content-center">
            <div className="col-3 text-right number-text">
              {this.state.num1 + this.state.num2}
            </div>
            <div className="col-2 text-center number-text">
              -
            </div>
            <div className="col-3 text-left number-text">
              {this.state.num1}
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h1>Type your answer below</h1>
            </div>
          </div>
          <div className="row">
            <div className="col text-center ">
              <input name="answerForm" className="answer-form" onKeyPress={this.checkAnswer} onChange={this.updateInput} value={this.state.userAnswer} autoFocus />
            </div>
          </div>
          <CorrectModal show={this.state.correctModal} closeModal={this.closeModal} />
          <InCorrectModal show={this.state.incorrectModal} closeModal={this.closeModal} />
        </div>
      )
    }
  }

  problemRouter = () => {
    var difficulty = this.state.difficulty
    this.setState({
      userAnswer: ""
    })
    if (difficulty === "easy") {
      this.generateEasyProblem()
    } else if (difficulty === "medium") {
      this.generateMediumProblem()
    } else {
      this.generateHardProblem()
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
      if (answer === this.state.num2) {
        this.setState({
          correctModal: true
        })
        this.problemRouter()
      } else {
        this.setState({
          incorrectModal: true,
          userAnswer: ""
        })
      }
    }
  }
  closeModal = () => {
    this.setState({
      incorrectModal: false,
      correctModal: false
    })
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
    }, () => {
      this.problemRouter()
    })
  }
}
export default Subtraction