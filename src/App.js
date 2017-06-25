import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import './App.css';
import { NavLink } from "react-router-dom";
import { onUserNameChange } from "./redux/reducers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.text}</h2>
        </div>
        <input placeholder="Enter Name" value={this.props.text} onChange={this.props.onTextChange} />
        <NavLink to={"/hello"}>Go</NavLink>
        {/*Test: {this.props.text}*/}
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    text: state.userName
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onTextChange: (event) => {dispatch(onUserNameChange(event.target.value))},
    onGoButtonClick: () => {} 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

