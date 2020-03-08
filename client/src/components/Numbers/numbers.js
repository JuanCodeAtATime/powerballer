import React, { Component } from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Hero from "../Hero";
import "./style.css";
// import Powerballinput, { RecentNo } from "../../pages/Members";
import Powerballinput from "../../pages/Members";
import Jackpot from "../Jackpot/Jackpot";
// import { ListItemFirstchild } from "../List";
// import WinningNum from "../../pages/WinningNum";
import LastDrawDate from "../LastDrawDate";
import 'moment';
import 'moment-timezone';
import WinningNum from "../../pages/WinningNum";




class Numbers extends Component {
    state = {
        dateTime: [],
        userNumbers: [],
        recentNumber: '',
        matches: '',
        powerballs: ""

    };

    componentDidMount() {
        this.loadRecentNo();
        this.loadLastDrawDate();
        // this.matchUserNumsToWinNums();

    }

    //loadRecentNo loads and renders most recent inputted number in upper left section of Hero

    loadRecentNo = () => {
        API.getNumbers()
            .then(res =>
                this.setState({
                    recentNumber: res.data[0]
                })
            )
            .catch(err => console.log(err));
    };

    // matchUserNumsToWinNums = () => {
    //     let userNumbers = [];
    //     let num1 = this.state.recentNumber.no1
    //     { console.log(this.state.recentNumber.no1) }
    //     let num2 = this.state.recentNumber.no2;
    //     let num3 = this.state.recentNumber.no3;
    //     let num4 = this.state.recentNumber.no4;
    //     let num5 = this.state.recentNumber.no5;
    //     let pb = this.state.recentNumber.powerball;
    //     userNumbers.push(num1);
    //     userNumbers.push(num2);
    //     userNumbers.push(num3);
    //     userNumbers.push(num4);
    //     userNumbers.push(num5);
    //     userNumbers.push(pb);
    //     let winningNumbers = [12, 5, 22, 23, 24, 3]
    //     let matches = userNumbers.filter(n => winningNumbers.indexOf(n) > -1)
    //     console.log(matches.length + " Here they are " + matches);
    //     console.log("this is num1: " + userNumbers);
    // }


    deleteNumber = id => {
        API.deleteNumber(id)
            .then(res => this.loadRecentNo())
            .catch(err => console.log(err));
    };




    loadLastDrawDate = () => {
        API.getPbNum()
            .then(res =>
                this.setState({
                    ...this.state,
                    dateTime: res.data[0].draw_date,
                    powerballs: res.data[0].winning_numbers.split(' ')
                })

            )
            .catch(err => console.log(err));
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;

        //Filter and indexOf methods used below to match User's numbers with dynamic powerball numbers.
        let userNumbers = [];
        let num1 = this.state.recentNumber.no1;
        let num2 = this.state.recentNumber.no2;
        let num3 = this.state.recentNumber.no3;
        let num4 = this.state.recentNumber.no4;
        let num5 = this.state.recentNumber.no5;
        let pb = this.state.recentNumber.powerball;
        userNumbers.push(num1);
        userNumbers.push(num2);
        userNumbers.push(num3);
        userNumbers.push(num4);
        userNumbers.push(num5);
        userNumbers.push(pb);
        let winningNumbers = [12, 5, 22, 23, 24, 3]
        const matches = userNumbers.filter(n => winningNumbers.indexOf(n) > -1)
        console.log("You got " + matches.length + " matches. " + " Here they are " + matches);
        console.log("this is num1: " + num1);

        return (
            <div>
                <Hero>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-auto mr-auto">
                                <button
                                    className="my-ticketNo"
                                    type="button"
                                    style={{
                                        fontSize: "15px",
                                        color: "red",
                                        borderRadius: "9px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px"
                                    }}>

                                    <div className="col center-align" style={{ marginTop: "0" }}>
                                        <h5 className="logo" style={{ color: "red" }}>Welcome, <span id="pro">{user.name.split(" ")[0]}</span></h5>
                                    </div>
                                    MY TICKET#
                                <h5 className="my-ticket-no" style={{ color: "red" }} >
                                        <b>
                                            {this.state.recentNumber.no1}{"-"}
                                            {this.state.recentNumber.no2}{"-"}
                                            {this.state.recentNumber.no3}{"-"}
                                            {this.state.recentNumber.no4}{"-"}
                                            {this.state.recentNumber.no5}{"-"}
                                            {this.state.recentNumber.powerball}
                                        </b>

                                    </h5></button>
                            </div>


                            <div className="col-auto">
                                <button
                                    style={{
                                        fontSize: "15px",
                                        color: "red",
                                        borderRadius: "9px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px"
                                    }}
                                    onClick={this.onLogoutClick}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-auto mr-auto">
                                <button
                                    className="my-ticketNo"
                                    type="button"
                                    style={{
                                        fontSize: "15px",
                                        color: "red",
                                        borderRadius: "9px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px"
                                    }}>
                                    POWERBALL# for : <LastDrawDate></LastDrawDate>
                                    <WinningNum></WinningNum>

                                    <h5 className="my-ticket-no" style={{ color: "red" }} >


                                    </h5></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col center-align" style={{ marginTop: "0", display: "block" }}>
                                <label htmlFor="my-matches" style={{ fontSize: "20px", color: "white", display: "block" }}>YOUR RESULTS FOR: </label>

                                <h4><LastDrawDate />
                                </h4>

                                <h6 style={{ color: "white" }}>{console.log(this.state.powerballs)}</h6>
                            </div>

                        </div>
                        <div className="row align-left">
                            <div className="col center-align" style={{ marginTop: "0" }}>
                                <label htmlFor="my-matches" style={{ fontSize: "20px", color: "white", display: "block" }}>MATCHES: </label>
                                <button id="myMatches" style={{
                                    width: "auto",
                                    minWidth: "100px",
                                    height: "105px",
                                    backgroundColor: "red",
                                    display: "block",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "5px",
                                    fontSize: "4.3rem",
                                    color: "white"
                                }}>
                                    <p id="my-matches">{matches.length}</p></button>


                                <label htmlFor="my-matches" style={{ fontSize: "20px", color: "white", display: "block" }}>PRIZES: </label>
                                <button id="myPrizes" style={{
                                    width: "auto",
                                    minWidth: "100px",
                                    height: "105px",
                                    backgroundColor: "red",
                                    display: "block",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "5px",
                                    fontSize: "4.3rem",
                                    color: "white"

                                }}>
                                    <p id="my-prizes">$4</p></button>
                            </div>
                            <div className="col center-align" style={{ marginTop: "0" }}>

                            </div>
                        </div>


                        <div className="row justify-content-between">

                            <div className="col-auto">
                                <label htmlFor="currentJackpot" style={{ fontSize: "20px", color: "white" }}>Current Jackpot</label>
                                <h4 className="current-jackpot" style={{ color: "red" }} >
                                    <Jackpot></Jackpot>
                                </h4>
                            </div>
                        </div>

                    </div>


                </Hero>
                <br></br>
                <div className="noInput"> <label htmlFor="ticketNo" style={{ color: "white", fontSize: "30px", marginLeft: "15px", textAlign: "left" }}>Enter Ticket#</label>
                    <Powerballinput /></div>


            </div>
        );
    }
}
Numbers.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Numbers);