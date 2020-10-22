import React from 'react';
import '../App.css';

class Difficulty extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="text-center my-2 container">
        <h1>Choose your difficulty</h1>
        <div className="d-flex justify-content-around row my-3">
          <span className="text-center col cursor" onClick={() => this.props.chooseDifficulty("easy")}>
            <i className="fa fa-star fa-4x text-gold" aria-hidden="true"></i>
            <h4 className="my-3">Easy</h4>
          </span>
          <span className="text-center col cursor" onClick={() => this.props.chooseDifficulty("medium")}>
            <i className="fa fa-star fa-4x text-gold" aria-hidden="true"></i>
            <i className="fa fa-star fa-4x text-gold" aria-hidden="true"></i>
            <h4 className="my-3">Medium</h4>
          </span>
          <span className="text-center col cursor" onClick={() => this.props.chooseDifficulty("hard")}>
            <i className="fa fa-star fa-4x text-gold" aria-hidden="true"></i>
            <i className="fa fa-star fa-4x text-gold" aria-hidden="true"></i>
            <i className="fa fa-star fa-4x text-gold" aria-hidden="true"></i>
            <h4 className="my-3">Hard</h4>
          </span>
        </div>
      </div>
    )
  }
}

export default Difficulty