import React, { Component } from 'react';
import { connect } from "react-redux";
// import Moment from "react-moment";
import moment from "moment";
import Countdown from "react-count-down";
import './hello.css';
import GIPHY_API_KEY from "../giphy-api-key";
import _ from "lodash";

var giphy = require('giphy-api')(GIPHY_API_KEY);


const OPTIONS = { endDate: '07/16/2017 09:00 PM', prefix: 'until Season 7 premiere!' }

class Hello extends Component {
    constructor() {
        super()
        this.state = { deathGifURL: "" }
    }

    componentDidMount() {
        giphy.search('game of thrones death').then((response) => {
            console.log(response.data.length)

            this.setState({ deathGifURL: _.sample(response.data).images.downsized_medium.url })
            // _.sample(collection)

        });
    }
    render() {
        return (
            <div className="Hello">
                <div className="Countdown-to-premiere">
                    <Countdown options={OPTIONS} />
                </div>


                <div className="You-know-nothing">
                    You know nothing {this.props.text} Snow
                </div>

                <img src={this.state.deathGifURL} />


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