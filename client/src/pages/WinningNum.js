import React, { Component } from "react";
import API from "../utils/API";
import "./style.css"



class WinningNum extends Component {
    state = {
        powerballs: []
    };

    loadWinningNums = () => {
        API.getPbNum()
            .then(res =>
                this.setState({
                    powerballs: res.data[0].winning_numbers,
                    dateTime: res.data[0].draw_date
                })

            )
            .catch(err => console.log(err));
    };



    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        this.loadWinningNums();

    }

    // Here's the the draw date from API.  Need code to convert it then render to UI
    // {this.state.dateTime}

    render() {
        return (
            <div>
                <div className="live-pb-num">{this.state.powerballs}</div>
            </div>
        );
    }
}

export default WinningNum;
