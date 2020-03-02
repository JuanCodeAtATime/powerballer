import React, { Component } from "react";
import API from "../../utils/API";
import Moment from 'react-moment';
// import "./style.css"



class NextDraw extends Component {
    state = {
        nextDrawDate: []

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
        return (
            < div className="jackpotAmt" >
                <h2>
                    <Moment className="moment" format="MM/DD/YYYY">{this.state.nextDrawDate}</Moment>
                </h2>

            </div >
        );
    }
}

export default NextDraw;