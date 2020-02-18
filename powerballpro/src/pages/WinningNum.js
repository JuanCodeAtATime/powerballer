import React, { Component } from "react";
import API from "../utils/API";


class WinningNum extends Component {
    state = {
        powerballs: []
    };

    loadNextDog = () => {
        API.getRandomDog()
            .then(res =>
                this.setState({
                    powerballs: res.data[0].winning_numbers
                })

            )
            .catch(err => console.log(err));
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        this.loadNextDog();

    }


    render() {
        return (
            <div>
                <div className="powerballs">{this.state.powerballs}</div>
            </div>
        );
    }
}

export default WinningNum;
