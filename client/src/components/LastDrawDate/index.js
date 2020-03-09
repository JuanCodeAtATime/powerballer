import React, { Component } from "react";
import API from "../../utils/API";
import Moment from 'react-moment';
import 'moment-timezone';




class LastDrawDate extends Component {
    state = {
        dateTime: []

    };

    loadLastDrawDate = () => {
        API.getPbNum()
            .then(res =>
                this.setState({
                    dateTime: res.data[0].draw_date

                })

            )
            .catch(err => console.log(err));
    };



    // When the component mounts, load winning numbers
    componentDidMount() {
        this.loadLastDrawDate();
    }



    render() {
        return (
            < div >
                <Moment className="moment" format="ddd, MMM Do YYYY">{this.state.dateTime}</Moment >
            </div >
        );
    }
}

export default LastDrawDate;