import React, { Component } from "react";
import API from "../../utils/API";
// import Moment from 'react-moment';
// import "./style.css"



class Jackpot extends Component {
    state = {
        jackpotAmt: []

    };

    loadPowerballData = () => {
        API.loadPbData()
            .then(res =>
                this.setState({
                    jackpotAmt: res.data[0].field_prize_amount

                })
                // res[0].field_next_draw_date
                // res.field_next_draw_date[0]

            )
            .catch(err => console.log(err));
    };




    // When the component mounts, load winning numbers
    componentDidMount() {
        this.loadPowerballData();
    }


    // Here's the the draw date from API.  Need code to convert it then render to UI
    // {this.state.dateTime}

    render() {
        return (
            < div className="jackpotAmt" >
                <h2>
                    {this.state.jackpotAmt}
                </h2>

                {/* <Moment className="moment" format="MM/DD/YYYY">{this.state.dateTime}</Moment > */}

            </div >
        );
    }
}

export default Jackpot;