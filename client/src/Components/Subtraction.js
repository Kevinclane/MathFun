import React from 'react';
import '../App.css';

class Subtraction extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div>
          <i className="fa fa-arrow-left fa-3x cursor" aria-hidden="true" onClick={() => this.props.changeView("home")}></i>
        </div>
        <div className="row">
          <div className="col">
            View Change works
            </div>
        </div>
      </div>
    )
  }
}

export default Subtraction