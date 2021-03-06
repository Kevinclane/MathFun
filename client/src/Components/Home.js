import React from 'react';
import '../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row mt-3 d-flex justify-content-around">
          <div className="col-md-5 col-10 p-3 d-flex justify-content-center" onClick={() => this.props.changeView("addition")} >
            <div className="cursor d-flex border-img justify-content-center flex-column">
              <i className="fa fa-plus fa-7x text-lb text-center" aria-hidden="true"></i>
              <h4 className="card-text text-center">Addition</h4>
            </div>
          </div>
          <div className="col-md-5 col-10 p-3 d-flex justify-content-center" onClick={() => this.props.changeView("subtraction")}>
            <div className="cursor border-img d-flex justify-content-center flex-column">
              <i className="fa fa-minus fa-7x text-lb text-center" aria-hidden="true"></i>
              <h4 className="card-text text-center">Subtraction</h4>
            </div>
          </div>
          <div className="col-md-5 col-10 p-3 d-flex justify-content-center" onClick={() => this.props.changeView("missing")}>
            <div className="cursor border-img d-flex justify-content-center flex-column">
              <i className="fa fa-question fa-7x text-lb text-center" aria-hidden="true"></i>
              <h4 className="card-text text-center">Patterns</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home