import React from 'react';
import './App.css';
import Axios from "axios";
import Navbar from "./Components/Navbar.js"
import Home from "./Components/Home.js"
import Addition from "./Components/Addition";
import Subtraction from "./Components/Subtraction";

let base = window.location.host.includes("localhost")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true,
});

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: "home"
    }
  }
  render() {
    if (this.state.view === "home") {
      return (
        <div className="App">
          <Navbar />
          <Home changeView={this.changeView} />
        </div>
      );
    } else if (this.state.view === "addition") {
      return (
        <div>
          <Navbar />
          <Addition changeView={this.changeView} />
        </div>
      )
    } else if (this.state.view === "subtraction") {
      return (
        <div>
          <Navbar />
          <Subtraction changeView={this.changeView} />
        </div>
      )
    }
  }
  changeView = (choice) => {
    this.setState({
      view: choice
    })
  }
}

export default App;
