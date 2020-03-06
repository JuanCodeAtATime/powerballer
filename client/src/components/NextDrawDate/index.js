import React, { Component } from "react";
import API from "../../utils/API";
import Moment from 'react-moment';
import 'moment-timezone';
// import "./style.css"



class NextDraw extends Component {
    state = {
        nextDrawDate: []

    };

    loadPowerballData = () => {
        API.loadPbData()
            .then(res =>
                this.setState({
                    nextDrawDate: res.data[0].field_next_draw_date.moment

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
            < div className="jackpotAmt" >
                <h3>
                    <Moment tZ="America/New_York" className="moment" format="MM/DD/YYYY, h:mm a">{this.state.nextDrawDate}</Moment>
                </h3>

            </div >
        );
    }
}

export default NextDraw;