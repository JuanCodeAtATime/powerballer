import React, { Component } from "react";
import API from "../../utils/API";
// import Moment from 'react-moment';
import Countdown from "../Countdown"
import 'moment-timezone';
// import "./style.css"




class NextDraw extends Component {
    state = {
        nextDrawDate: ""

    };

    loadPowerballData = () => {
        API.loadPbData()
            .then(res =>
                this.setState({
                    nextDrawDate: res.data[0].field_next_draw_date
                })
            )
            .catch(err => console.log(err));
    };




    // When the component mounts, load powerball data
    componentDidMount() {
        this.loadPowerballData();
    }

    render() {
        // let afterAdjust = <Moment subtract={{ hours: 4 }}>{this.state.nextDrawDate}</Moment>
        return (
            < div className="nextDrawDate" >
                <Countdown subtract={{ hours: 4 }}
                    placeholder="Next Draw:"
                    timeTillDate={this.state.nextDrawDate}
                // timeTillFormat={"MM/DD/YYYY, hh:mm a"}
                />
                {console.log(this.state.nextDrawDate + "<--This is the time on Countdown")}
            </div >
        );
    }
}

export default NextDraw;