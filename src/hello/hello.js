import React, { Component } from 'react';
import { connect } from "react-redux";
// import Moment from "react-moment";
import moment from "moment";
import Countdown from "react-count-down";
import TimeAgo from "react-timeago";

const OPTIONS = { endDate: '07/17/2017 09:00 PM', prefix: 'until the premiere!'}

class Hello extends Component {

    
    render() {
        return (
            <div>
                <div>
                    You know nothing {this.props.text} Snow
                </div>

                <div>
                    {/*{this.props.time}*/}
                    {/*{moment().format("LTS")}
                    <p> test </p>
                    {moment().startOf("minute").fromNow()}*/}

                    <Countdown options={OPTIONS} />

                    <TimeAgo date="Feb 1, 1966" />



                </div>
            </div>
        );
    }
}



function mapStateToProps (state) {
  return {
    text: state.userName,
    time: state.time
  }
}

export default connect(mapStateToProps)(Hello);