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
// import { pluralize } from "mongoose";
import NextDraw from "../NextDrawDate";


class Numbers extends Component {
    state = {
        dateTime: [],
        userNumbers: [],
        recentNumber: '',
        secRecentNo: '',
        thirdRecentNo: "",
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
                    ...this.state,
                    recentNumber: res.data[0],
                    secRecentNo: res.data[1],
                    thirdRecentNo: res.data[2],
                    fourthRecentNo: res.data[3],
                    fifthRecentNo: res.data[4]
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
        //Pushing up to 3 User games into arrays within the userNumbers object
        let userNumbers = {
            game1: [],
            game2: [],
            game3: []

        };

        //Shortening the state variables
        let gameOne = this.state.recentNumber
        let gameTwo = this.state.secRecentNo
        let gameThree = this.state.thirdRecentNo

        //User's first ticket number input
        let num1 = gameOne.no1;
        let num2 = gameOne.no2;
        let num3 = gameOne.no3;
        let num4 = gameOne.no4;
        let num5 = gameOne.no5;
        let pb = gameOne.powerball;

        //User's second ticket number inputs
        let numb1 = gameTwo.no1;
        let numb2 = gameTwo.no2;
        let numb3 = gameTwo.no3;
        let numb4 = gameTwo.no4;
        let numb5 = gameTwo.no5;
        let pb2 = gameTwo.powerball;

        //User's third ticket number inputs    
        let numbe1 = gameThree.no1;
        let numbe2 = gameThree.no2;
        let numbe3 = gameThree.no3;
        let numbe4 = gameThree.no4;
        let numbe5 = gameThree.no5;
        let pb3 = gameThree.powerball;

        //Pushing all (3) User's ticket numbers into arrays that will be matched and returned by filter method 
        userNumbers.game1.push(num1, num2, num3, num4, num5, pb);
        userNumbers.game2.push(numb1, numb2, numb3, numb4, numb5, pb2);
        userNumbers.game3.push(numbe1, numbe2, numbe3, numbe4, numbe5, pb3);
        // userNumbers.push(num3);
        // userNumbers.push(num4);
        // userNumbers.push(num5);
        // userNumbers.push(pb);
        let winningNumbers = this.state.powerballs
        const gameOneMatches = userNumbers.game1.filter(n => winningNumbers.indexOf(n) > -1)
        const gameTwoMatches = userNumbers.game2.filter(n => winningNumbers.indexOf(n) > -1)
        const gameThreeMatches = userNumbers.game3.filter(n => winningNumbers.indexOf(n) > -1)
        console.log("For Game 1, you got " + gameOneMatches.length + " Whiteball matches. " + " Here they are " + gameOneMatches);
        console.log("For Game 2, you got  " + gameTwoMatches.length + " Whiteball matches. " + " Here they are " + gameTwoMatches);
        console.log("For Game 3, you got  " + gameThreeMatches.length + " Whiteball matches. " + " Here they are " + gameThreeMatches);
        // console.log("this is num1: " + num1 + ". This is the powerball no: " + winningNumbers[5]);
        let prize = [];

        // if ((pb && pb2 === winningNumbers[5]) && (gameOneMatches && gameTwoMatches <= 1)) {
        //     prize.push("$8")
        // }
        if (pb === winningNumbers[5] && gameOneMatches <= 1) {
            prize.push("$4")
        }
        // if (pb2 === winningNumbers[5] && gameTwoMatches <= 1) {
        //     prize.push("$4")
        // }

        // if ((pb || pb2 === winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 2)) {
        //     prize.push("$4")
        // }
        // if ((pb || pb2 === winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 3)) {
        //     prize.push("$7")
        // }
        // if ((pb || pb2 !== winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 3)) {
        //     prize.push("$7")
        // }
        // if ((pb || pb2 === winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 4)) {
        //     prize.push("$100")
        // }
        // if ((pb || pb2 !== winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 4)) {
        //     prize.push("$100")
        // }
        // if ((pb || pb2 === winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 5)) {
        //     prize.push("$50,000")
        // }
        // if ((pb || pb2 !== winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 5)) {
        //     prize.push("$100,000")
        // }
        // if ((pb || pb2 === winningNumbers[5]) && (gameOneMatches || gameTwoMatches === 6)) {
        //     prize.push("$100,000")
        // }
        // else if (pb === winningNumbers[5] && gameOneMatches === 2) {
        //     prize.push("$4")
        // }
        // else if (pb === winningNumbers[5] && gameOneMatches === 3) {
        //     prize.push("$7")
        //     console.log("LINE 96/numbers.js:  You matched the winning powerball number (" + winningNumbers[5] + ") and you matched " + gameOneMatches + " whiteballs")
        // }
        // else if (pb !== winningNumbers[5] && gameOneMatches === 3) {
        //     prize.push("$7")
        // }
        // else if (pb === winningNumbers[5] && gameOneMatches === 4) {
        //     prize.push("$100")
        // }
        // else if (pb !== winningNumbers[5] && gameOneMatches === 4) {
        //     prize.push("$100")
        // }
        // else if (pb === winningNumbers[5] && gameOneMatches === 5) {
        //     prize.push("$50,000")
        // }
        // else if (pb !== winningNumbers[5] && gameOneMatches === 5) {
        //     prize.push("$1,000,000")
        // }
        // else if (pb === winningNumbers[5] && gameOneMatches === 6) {
        //     prize.push("JACKPOT!!!")
        // }
        else {
            console.log("Sorry.  You've got no matches ")
        }

        return (
            <div>
                <Hero>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-auto mr-auto" style={{ marginTop: "0" }}>
                                <h4 className="logo" style={{ color: "whitesmoke" }}><b>Welcome,</b> <span id="pro">{user.name.split(" ")[0]}!</span></h4>
                            </div>
                            <div className="col-md">
                                <button
                                    style={{
                                        fontSize: "15px",
                                        color: "red",
                                        borderRadius: "9px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px",
                                        float: "right"
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
                                        // fontSize: "15px",
                                        color: "red",
                                        borderRadius: "12px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px"
                                    }}>

                                    <h6><b>Your Ticket#</b></h6>
                                    <h4 className="my-ticket-no" id="my-ticket-no" style={{ color: "red", backgroundColor: "white", border: "solid yellow 2px", borderRadius: "5px" }} >
                                        <ul>
                                            <li>
                                                {gameOne.no1}{"-"}
                                                {gameOne.no2}{"-"}
                                                {gameOne.no3}{"-"}
                                                {gameOne.no4}{"-"}
                                                {gameOne.no5}{"-"}
                                                <span style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    borderRadius: "50%"
                                                }}>{gameOne.powerball}

                                                </span>
                                            </li>
                                            <li>
                                                {gameTwo.no1}{"-"}
                                                {gameTwo.no2}{"-"}
                                                {gameTwo.no3}{"-"}
                                                {gameTwo.no4}{"-"}
                                                {gameTwo.no5}{"-"}
                                                <span style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    borderRadius: "50%"
                                                }}>{gameTwo.powerball}

                                                </span>
                                            </li>

                                        </ul>


                                    </h4>
                                    <h6><b>for upcoming draw on:</b></h6>
                                    <h4><NextDraw></NextDraw></h4></button>
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
                                    <p id="my-matches">{gameOneMatches.length + gameTwoMatches.length}</p><p style={{ fontSize: "1rem", marginTop: "0" }}>MATCHES</p></button>


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
                                    <p id="my-prizes">{prize}</p><p style={{ fontSize: "1rem", marginTop: "0" }}>PRIZES</p></button>
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