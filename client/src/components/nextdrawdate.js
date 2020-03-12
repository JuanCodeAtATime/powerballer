import React, { Component } from "react";
import API from "../utils/API";
import Moment from 'react-moment';
import 'moment-timezone';
// import "./style.css"

class NextDrawDate extends Component {
    state = {
        nextDraw: []

    };

    loadPowerballData = () => {
        API.loadPbData()
            .then(res =>
                this.setState({
                    nextDraw: res.data[0].field_next_draw_date
                })

            )
            .catch(err => console.log(err));
    };




    // When the component mounts, load powerball data
    componentDidMount() {
        this.loadPowerballData();
    }

    render() {

        return (
            < div className="nextDrawDate" >
                <Moment
                    subtract={{ hours: 4 }}
                    // className="moment"
                    format="MMM Do YYYY, h:mm a"
                >
                    {this.state.nextDraw}
                </Moment>
            </div >
        );
    }
}

export default NextDrawDate;