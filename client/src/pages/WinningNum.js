import React, { Component } from "react";
import API from "../utils/API";
import "./style.css"



class WinningNum extends Component {
    state = {
        powerballs: [],
        dateTime: []

    };

    loadWinningNums = () => {
        API.getPbNum()
            .then(res =>
                this.setState({
                    powerballs: res.data[0].winning_numbers.split(' '),
                    // numberSplit: powerballs.split(' '),
                    dateTime: res.data[0].draw_date

                })

            )
            .catch(err => console.log(err));
    };



    // When the component mounts, load winning numbers
    componentDidMount() {
        this.loadWinningNums();
    }


    // Here's the the draw date from API.  Need code to convert it then render to UI
    // {this.state.dateTime}

    render() {
        return (
            < div className="powerballs" >
                <h4>Drawing date:</h4> <h5>{this.state.dateTime}</h5>
                <br></br>

                <div className="powerballs-wrap">
                    <span className="powerballNumber powerball-number-1">{this.state.powerballs[0]}</span>
                </div>

                <div className="powerballs-wrap">
                    <span className="powerballNumber powerball-number-2">{this.state.powerballs[1]}</span>
                </div>

                <div className="powerballs-wrap">
                    <span className="powerballNumber powerball-number-3">{this.state.powerballs[2]}</span>

                </div>
                <div className="powerballs-wrap">
                    <span className="powerballNumber powerball-number-4">{this.state.powerballs[3]}</span>

                </div>
                <div className="powerballs-wrap">
                    <span className="powerballNumber powerball-number-5">{this.state.powerballs[4]}</span>

                </div>
                <div className="powerballs-wrap" id="redBall">
                    <span className="powerballNumber powerball-redball">{this.state.powerballs[5]}</span>

                </div>
            </div >
        );
    }
}

export default WinningNum;