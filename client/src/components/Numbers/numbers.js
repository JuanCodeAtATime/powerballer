import React, { Component } from "react";
import API from "../../utils/API";
import WinningNum from "../../pages/WinningNum";
import { logoutUser } from "../../actions/authActions";
import LastDrawDate from "../LastDrawDate";
import Jackpot from "../Jackpot/Jackpot";
import NextDraw from "../NextDrawDate";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalInput from "../Modal/index";
import { Button, ButtonToolbar } from 'react-bootstrap'
import Hero from "../Hero";
import 'moment-timezone';
import "./style.css";
import 'moment';




class Numbers extends Component {
    state = {
        dateTime: [],
        userNumbers: [],
        recentNumber: '',
        secRecentNo: '',
        thirdRecentNo: "",
        prize: [],
        matches: '',
        powerballs: "",
        addModalShow: false

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
        let addModalClose = () => this.setState({ addModalShow: false })

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

        //Logic to match User's numbers to winning numbers, plus prize computation
        let winningNumbers = this.state.powerballs
        const gameOneMatches = userNumbers.game1.filter(n => winningNumbers.indexOf(n) > -1)
        const gameTwoMatches = userNumbers.game2.filter(n => winningNumbers.indexOf(n) > -1)
        const gameThreeMatches = userNumbers.game3.filter(n => winningNumbers.indexOf(n) > -1)
        // console.log("For Game 1, you got " + gameOneMatches.length + " Whiteball matches. " + " Here they are " + gameOneMatches);
        // console.log("For Game 2, you got  " + gameTwoMatches.length + " Whiteball matches. " + " Here they are " + gameTwoMatches);
        // console.log("For Game 3, you got  " + gameThreeMatches.length + " Whiteball matches. " + " Here they are " + gameThreeMatches);
        let prizes = this.state.prize

        if (pb === winningNumbers[5] && gameOneMatches.length === 1) {
            prizes.push("$4");
            console.log("You matched the powerball.  Your prize is $4")
        }

        if (pb === winningNumbers[5] && gameOneMatches.length === 2) {
            prizes.push("$4");
            console.log("You matched the powerball and a whiteball.  Your prize is still $4")
        }
        if (pb === winningNumbers[5] && gameOneMatches.length === 3) {
            prizes.push("$7");
            console.log("You matched two whiteballs and the powerball.  Your prize is $7.  This is the gameOne  " + gameOneMatches)
        }
        if (pb !== winningNumbers[5] && gameOneMatches.length === 3) {
            prizes.push("$7");
            console.log("You matched three whiteballs.  Your prize is $7")
        }
        if (pb === winningNumbers[5] && gameOneMatches.length === 4) {
            prizes.push("$100");
            console.log("You matched three whiteballs + the powerball.  Your prize is $100")
        }
        if (pb !== winningNumbers[5] && gameOneMatches.length === 4) {
            prizes.push("$100");
            console.log("You matched four whiteballs.  Your prize is $100")
        }
        if (pb === winningNumbers[5] && gameOneMatches.length === 5) {
            prizes.push("$50,000");
            console.log("You matched four whiteballs + the powerball.  Your prize is $50,000")
        }
        if (pb === winningNumbers[5] && gameOneMatches.length === 5) {
            prizes.push("$100,000");
            console.log("Wow!! You matched five whiteballs.  Your prize is $100,000")
        }
        if (pb === winningNumbers[5] && gameOneMatches.length === 6) {
            prizes.push("$JACKPOT!!!!");
            console.log("Wow!! YOU WON THE JACKPOT")
        }
        // else {
        //     console.log("You have no matches")
        // }
        // if (pb === winningNumbers[5] && gameOneMatches == 2) {
        //     prize.push("$4")
        //     console.log("You matched one whiteball and the pb.  Your prize is $4")



        return (
            <div>
                <Hero>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-md-5" style={{ marginTop: "0" }}>
                                <h4 className="logo" style={{ color: "whitesmoke" }}><b>{user.name.split(" ")[0]}'s </b><span id="pro">Dashboard</span></h4>
                            </div>
                            <div className="col-md-2">
                                <ButtonToolbar>
                                    <button
                                        style={{
                                            fontSize: "15px",
                                            color: "whitesmoke",
                                            borderRadius: "9px",
                                            marginTop: "15px",
                                            backgroundColor: "green",
                                            borderTop: "solid whitesmoke 2.5px",
                                            borderBottom: "solid whitesmoke 2.5px",
                                            float: "right"
                                        }}
                                        onClick={() => this.setState({ addModalShow: true })}
                                    >
                                        Enter Tix#
                                </button>
                                    <ModalInput
                                        show={this.state.addModalShow}
                                        onHide={addModalClose}
                                    />

                                </ButtonToolbar>



                            </div>
                            <div className="col-md-2">
                                <button
                                    style={{
                                        fontSize: "15px",
                                        color: "whitesmoke",
                                        borderRadius: "9px",
                                        marginTop: "15px",
                                        backgroundColor: "red",
                                        borderTop: "solid whitesmoke 2.5px",
                                        borderBottom: "solid whitesmoke 2.5px",
                                        float: "right"
                                    }}
                                // onClick={this.onLogoutClick}
                                >
                                    Alerts
                                </button>
                            </div>
                            <div className="col-md-2">
                                <button
                                    style={{
                                        fontSize: "15px",
                                        color: "whitesmoke",
                                        borderRadius: "9px",
                                        marginTop: "15px",
                                        backgroundColor: "black",
                                        borderTop: "solid whitesmoke 2.5px",
                                        borderBottom: "solid whitesmoke 2.5px",
                                        float: "right"
                                    }}
                                    onClick={this.onLogoutClick}
                                >
                                    Logout
                                </button>
                            </div>


                        </div>
                        <div className="row" style={{ marginBottom: "25px" }}>
                            <div className="col-md-4">
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

                                    <h6 style={{ color: "black" }}><b>YOUR TICKET#s</b></h6>
                                    <h4 className="my-ticket-no" id="my-ticket-no" style={{ color: "red", backgroundColor: "white", border: "solid yellow 2px", borderRadius: "5px" }} >
                                        <ul>
                                            <li >
                                                {gameOne.no1}{"-"}
                                                {gameOne.no2}{"-"}
                                                {gameOne.no3}{"-"}
                                                {gameOne.no4}{"-"}
                                                {gameOne.no5}{"-"}
                                                <span style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    borderRadius: "45%"
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
                                                    borderRadius: "45%"
                                                }}>{gameTwo.powerball}

                                                </span>
                                            </li>
                                            <li >
                                                {gameThree.no1}{"-"}
                                                {gameThree.no2}{"-"}
                                                {gameThree.no3}{"-"}
                                                {gameThree.no4}{"-"}
                                                {gameThree.no5}{"-"}
                                                <span style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    borderRadius: "45%"
                                                }}>{gameThree.powerball}

                                                </span>
                                            </li>
                                        </ul>

                                    </h4>
                                    <h6 style={{ color: "black" }}><b>FOR UPCOMING DRAW ON:</b></h6>
                                    <h4><NextDraw></NextDraw></h4></button>
                            </div>
                            <div className="col-md-3">
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
                            <div className="col-md-5">
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
                        <div className="row align-content-center justify-content-center text-align-center">
                            <div className="col-md-12">
                                <h4 style={{ color: "whitesmoke" }}>YOUR RESULTS:</h4>
                            </div>
                        </div>


                        <div className="row align-content-center justify-content-center text-align-center">

                            <div className="col-md-5 justify-content-between" style={{
                                backgroundColor: "black",
                                width: "50%",
                                margin: "2px",
                                borderRadius: "15px",
                                padding: "8px",
                                borderTop: "solid whitesmoke 3px",
                                borderBottom: "solid whitesmoke 3px"
                            }}>

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
                                        border: "solid red 3px",
                                        fontSize: "4.3rem",
                                        color: "red",
                                        zIndex: "-1",
                                        position: "relative"

                                    }}>
                                    <p id="my-matches">
                                        {gameOneMatches.length +
                                            gameTwoMatches.length + gameThreeMatches.length}
                                    </p>
                                    <p style={{ fontSize: "1.5rem", marginTop: "0", color: "whitesmoke" }}>
                                        MATCHES
                                    </p>
                                </button>
                            </div>
                            <div className="col-md-5 justify-content-between" style={{
                                backgroundColor: "black",
                                width: "50%",
                                margin: "2px",
                                borderRadius: "15px",
                                padding: "8px",
                                borderTop: "solid whitesmoke 3px",
                                borderBottom: "solid whitesmoke 3px"
                            }}>
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
                                    border: "solid red 3px",
                                    fontSize: "4.3rem",
                                    color: "red"

                                }}>
                                    <p id="my-prizes">{prizes}</p>
                                    <p style={{
                                        fontSize: "1.5rem",
                                        marginTop: "0",
                                        color: "whitesmoke"
                                    }}>PRIZES</p>
                                </button>
                            </div>

                        </div>



                        <div className="row">

                        </div>

                        <div className="row">
                            <div className="col-m-4" style={{ marginTop: "0" }}>



                                {/* <label htmlFor="my-matches" style={{ fontSize: "16px", color: "white", display: "top" }}>MY PRIZES: </label> */}

                            </div>
                        </div>

                    </div>


                </Hero>
                <br></br>

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