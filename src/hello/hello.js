import React, { Component } from 'react';
import { connect } from "react-redux";
// import Moment from "react-moment";
import moment from "moment";
import Countdown from "react-count-down";
import './hello.css';



const OPTIONS = { endDate: '07/17/2017 09:00 PM', prefix: 'until Season 7 premiere!' }

class Hello extends Component {


    render() {
        return (
            <div className="Hello">
                <div className="You-know-nothing">
                    You know nothing {this.props.text} Snow
                </div>

                <div className="Countdown-to-premiere">
                    <Countdown options={OPTIONS} />
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        text: state.userName,
        time: state.time
    }
}

export default connect(mapStateToProps)(Hello);