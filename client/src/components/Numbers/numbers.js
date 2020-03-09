import React, { Component } from "react";
import PropTypes from "prop-types";
import API from "../../utils/API";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Hero from "../Hero";
import "./style.css";
import Powerballinput from "../../pages/Members";
import Jackpot from "../Jackpot/Jackpot";
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
        let rN = this.state.recentNumber
        let num1 = rN.no1;
        let num2 = rN.no2;
        let num3 = rN.no3;
        let num4 = rN.no4;
        let num5 = rN.no5;
        let pb = rN.powerball;
        userNumbers.push(num1);
        userNumbers.push(num2);
        userNumbers.push(num3);
        userNumbers.push(num4);
        userNumbers.push(num5);
        userNumbers.push(pb);
        let winningNumbers = this.state.powerballs
        const matches = userNumbers.filter(n => winningNumbers.indexOf(n) > -1)
        console.log("You got " + matches.length + " matches. " + " Here they are " + matches);
        console.log("this is num1: " + num1 + ". This is the powerball no: " + winningNumbers[5]);
        if (pb === winningNumbers[5]) {

            console.log("The pb is: " + winningNumbers[5] + ".  Your pb was: " + pb + ". CONGRATS!!")
        } else {
            console.log("Sorry.  The pb does not match!")
        }

        return (
            <div>
                <Hero>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-auto mr-auto" style={{ marginTop: "0" }}>
                                <h4 className="logo" style={{ color: "whitesmoke" }}><b>Welcome,</b> <span id="pro">{user.name.split(" ")[0]}!</span></h4>
                            </div>
                            <div className="col-md-7">
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

                                    YOUR TICKET#
                                <h4 className="my-ticket-no" style={{ color: "red" }} >
                                        <b>
                                            {rN.no1}{"-"}
                                            {rN.no2}{"-"}
                                            {rN.no3}{"-"}
                                            {rN.no4}{"-"}
                                            {rN.no5}{"-"}
                                            {rN.powerball}
                                        </b>

                                    </h4></button>
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
                                    <h4 style={{ color: "red" }}><em>CURRENT JACKPOT</em></h4>
                                    <h4 className="current-jackpot" style={{ color: "red" }} >
                                        <Jackpot></Jackpot>
                                    </h4></button>
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
                            <div className="col-m-4" style={{ marginTop: "0" }}>
                                <div className="col-m-4" style={{ marginBottom: "8px", display: "block" }}>
                                    <label htmlFor="my-matches" style={{ fontSize: "20px", color: "white", display: "block" }}>YOUR RESULTS: </label>
                                </div>
                                {/* <label htmlFor="my-matches" style={{ fontSize: "16px", color: "white", display: "inline-block" }}>MATCHES: </label> */}
                                <button id="myMatches"
                                    style={{
                                        width: "auto",
                                        minWidth: "100px",
                                        height: "105px",
                                        // backgroundColor: "red",
                                        display: "inline-block",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "5px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px",
                                        fontSize: "4.3rem",
                                        color: "red",
                                        marginRight: "5px",
                                        marginLeft: "8px"
                                    }}>
                                    <p id="my-matches">{matches.length}</p><p style={{ fontSize: "1rem", marginTop: "0" }}>MATCHES</p></button>


                                {/* <label htmlFor="my-matches" style={{ fontSize: "16px", color: "white", display: "top" }}>MY PRIZES: </label> */}
                                <button id="myPrizes" style={{
                                    width: "auto",
                                    minWidth: "100px",
                                    height: "105px",
                                    // backgroundColor: "red",
                                    display: "inline-block",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "5px",
                                    borderTop: "solid red 4px",
                                    borderBottom: "solid red 4px",
                                    fontSize: "4.3rem",
                                    color: "red"

                                }}>
                                    <p id="my-prizes">$4</p><p style={{ fontSize: "1rem", marginTop: "0" }}>PRIZES</p></button>
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