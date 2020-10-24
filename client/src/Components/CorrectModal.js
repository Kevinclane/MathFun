import React from 'react';
import '../App.css';

class CorrectModal extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    if (this.props.show == true) {
      return (
        <div className="modal-overlay text-center container">
          <div className="row">
            <h1 className="text-center col mt-5">Great Job!</h1>
          </div>
          <div className="row">
            <div className="mt-2 text-modal-correct text-center col">
            </div>
          </div>
          <button className="mt-3 btn btn-pink btn-lg" onClick={this.props.closeModal} >Let's do more math!</button>
        </div>
      )
    } else return (
      <div></div>
    )
  }

}

export default CorrectModal