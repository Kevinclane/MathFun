import React from 'react';
import '../App.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: []
    }
  }
  render() {
    return (
      <div className="container-fluid navBg navHeight">
        <div className="row h-100 d-flex justify-content-between align-items-center">
          <div className="col">

          </div>
        </div>
      </div>
    )
  }
}

export default Navbar