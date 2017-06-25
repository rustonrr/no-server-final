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
          <NavLink to={"/hello"}>Go</NavLink>
          {/*Test: {this.props.text}*/}
          <div>
            <CountUp
              start={30}
              end={0}
              duration={4}
              useEasing={false}
              separator=" "
              suffix=" remaining"
              onComplete={() => this.setState({ hidePicture: false })}
            />
          </div>
        </div>

        <div>
          <img src="http://i.imgur.com/K8xRUaA.gif" hidden={this.state.hidePicture} />
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

