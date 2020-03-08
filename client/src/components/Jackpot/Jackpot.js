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
                <b>{this.state.jackpotAmt}</b>
            </div >
        );
    }
}

export default Jackpot;