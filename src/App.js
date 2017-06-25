import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import { NavLink } from "react-router-dom";
import { onUserNameChange } from "./redux/reducers";
import CountUp from "react-countup";

class App extends Component {
  constructor() {
    super()
    this.state = { hidePicture: true }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome {this.props.text}</h2>
        </div>

        <div hidden={!this.state.hidePicture}>
          <input placeholder="Enter Name" value={this.props.text} onChange={this.props.onTextChange} />
          <NavLink to={"/hello"}> Go</NavLink>
          {/*Test: {this.props.text}*/}
          <div className="Countdown-to-head-cutoff">
            <CountUp
              start={10}
              end={0}
              duration={10}
              useEasing={false}
              separator=" "
              prefix="You have "
              suffix=" seconds to enter your name..."
              onComplete={() => this.setState({ hidePicture: false })}
            />
          </div>
        </div>

        <div hidden={this.state.hidePicture} className="Dead" >
          <h1>Too late, you're dead</h1>
          <img src="http://i.imgur.com/K8xRUaA.gif" />
          <h4>No second chances when you're dead</h4>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.userName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTextChange: (event) => { dispatch(onUserNameChange(event.target.value)) },
    onGoButtonClick: () => { }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

