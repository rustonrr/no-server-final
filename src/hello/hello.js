import React, { Component } from 'react';
import { connect } from "react-redux";

class Hello extends Component {
    render() {
        return (
            <div>
                You know nothing {this.props.text} Snow
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    text: state.userName
  }
}

export default connect(mapStateToProps)(Hello);