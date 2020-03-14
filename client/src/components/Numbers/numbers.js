import React, { Component } from "react";
import API from "../../utils/API";
import WinningNum from "../../pages/WinningNum";
import { logoutUser } from "../../actions/authActions";
import LastDrawDate from "../LastDrawDate";
import Jackpot from "../Jackpot/Jackpot";
import NextDrawDate from "../nextdrawdate.js"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalInput from "../Modal/index";
import ManageTix from "../ManageTix/index";
import JackpotModal from "../JackpotModal/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faChartBar, faEdit, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';


import Hero from "../Hero";
import 'moment-timezone';
import "./style.css";


class Numbers extends Component {
    state = {
        dateTime: [],
        // dateForToolTip1: "",
        // dateForToolTip2: "",
        // dateForToolTip3: "",
        userNumbers: [],
        recentNumber: '',
        secRecentNo: '',
        thirdRecentNo: "",
        prize: [],
        prize2: [],
        prize3: [],
        matches: '',
        powerballs: "",
        addModalShow: false,
        addModalShow2: false,
        addModalShow3: false
    };



    componentDidMount() {
        this.loadRecentNo();
        this.loadLastDrawDate();
        // this.formatDates();        
    }

    //These three functions handle modal buttons
    handleEnterTixModal = event => {
        event.preventDefault();
        this.setState({ addModalShow: true });
    };

    handleManageTixModal = event => {
        event.preventDefault();
        this.setState({ addModalShow2: true });
    };

    handleJackpotTrack = event => {
        event.preventDefault();
        this.setState({ addModalShow3: true });
    };



    //loadRecentNo loads and renders most recent inputted number in upper left section of Hero

    loadRecentNo = () => {
        API.getNumbers()
            .then(res =>
                this.setState({
                    ...this.state,
                    // dateForToolTip1: res.data[0].date,
                    // dateForToolTip2: res.data[1].date,
                    // dateForToolTip3: res.data[2].date,
                    recentNumber: res.data[0],
                    secRecentNo: res.data[1],
                    thirdRecentNo: res.data[2]

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
        let addModalClose2 = () => this.setState({ addModalShow2: false })
        let addModalClose3 = () => this.setState({ addModalShow3: false })


        // console.log("this is the res.data response " + this.state.dateForToolTip1)

        //Filter and indexOf methods used below to match User's numbers with dynamic powerball numbers.       
        //Pushing up to 3 User games into arrays within the userNumbers object
        let userNumbers = {
            game1: [],
            game2: [],
            game3: []

        };

        //Shortening the state variables
        const { recentNumber, secRecentNo, thirdRecentNo } = this.state;

        //User's first ticket number input
        let num1 = recentNumber.no1;
        let num2 = recentNumber.no2;
        let num3 = recentNumber.no3;
        let num4 = recentNumber.no4;
        let num5 = recentNumber.no5;
        let pb = recentNumber.powerball;

        //User's second ticket number inputs
        let numb1 = secRecentNo.no1;
        let numb2 = secRecentNo.no2;
        let numb3 = secRecentNo.no3;
        let numb4 = secRecentNo.no4;
        let numb5 = secRecentNo.no5;
        let pb2 = secRecentNo.powerball;

        //User's third ticket number inputs    
        let numbe1 = thirdRecentNo.no1;
        let numbe2 = thirdRecentNo.no2;
        let numbe3 = thirdRecentNo.no3;
        let numbe4 = thirdRecentNo.no4;
        let numbe5 = thirdRecentNo.no5;
        let pb3 = thirdRecentNo.powerball;

        //Pushing all (3) User's ticket numbers into arrays that will be matched and returned by filter method 
        userNumbers.game1.push(num1, num2, num3, num4, num5, pb);
        userNumbers.game2.push(numb1, numb2, numb3, numb4, numb5, pb2);
        userNumbers.game3.push(numbe1, numbe2, numbe3, numbe4, numbe5, pb3);

        //Logic to match User's numbers to winning numbers, plus prize computation
        let winningNumbers = this.state.powerballs
        const gameOneMatches = userNumbers.game1.filter(n => winningNumbers.indexOf(n) > -1)
        const gameTwoMatches = userNumbers.game2.filter(n => winningNumbers.indexOf(n) > -1)
        const gameThreeMatches = userNumbers.game3.filter(n => winningNumbers.indexOf(n) > -1)


        const prizes = this.state.prize;
        let p1 = (prizes) => prizes.filter((v, i) =>
            prizes.indexOf(v) === i)

        const prizes2 = this.state.prize2;
        let p2 = (prizes2) => prizes2.filter((v, i) =>
            prizes2.indexOf(v) === i)

        const prizes3 = this.state.prize3;
        let p3 = (prizes3) => prizes3.filter((v, i) =>
            prizes3.indexOf(v) === i)


        //Prizes Tier 1
        if (pb === winningNumbers[5] && gameOneMatches.length === 1) {
            prizes.push("$4");
        }
        if (pb2 === winningNumbers[5] && gameTwoMatches.length === 1) {
            prizes2.push("$4");
        }
        if (pb3 === winningNumbers[5] && gameThreeMatches.length === 1) {
            prizes3.push("$4");
        }

        //Prizes Tier 2
        if (pb === winningNumbers[5] && gameOneMatches.length === 2) {
            prizes.push("$4");
        }
        if (pb2 === winningNumbers[5] && gameTwoMatches.length === 2) {
            prizes2.push("$4");
        }
        if (pb3 === winningNumbers[5] && gameThreeMatches.length === 2) {
            prizes3.push("$4");
        }

        //Prizes Tier 3
        if (pb === winningNumbers[5] && gameOneMatches.length === 3) {
            prizes.push("$7");
        }
        if (pb2 === winningNumbers[5] && gameTwoMatches.length === 3) {
            prizes2.push("$7");
        }
        if (pb3 === winningNumbers[5] && gameThreeMatches.length === 3) {
            prizes3.push("$7");
        }

        //Prizes Tier 4

        if (pb !== winningNumbers[5] && gameOneMatches.length === 3) {
            prizes.push("$7");
        }
        if (pb2 !== winningNumbers[5] && gameTwoMatches.length === 3) {
            prizes2.push("$7");
        }
        if (pb3 !== winningNumbers[5] && gameThreeMatches.length === 3) {
            prizes3.push("$7");
        }


        //Prizes Tier 5
        if (pb === winningNumbers[5] && gameOneMatches.length === 4) {
            prizes.push("$100");
        }
        if (pb2 === winningNumbers[5] && gameTwoMatches.length === 4) {
            prizes2.push("$100");
        }
        if (pb3 === winningNumbers[5] && gameThreeMatches.length === 4) {
            prizes3.push("$100");
        }


        //Prizes Tier 6
        if (pb !== winningNumbers[5] && gameOneMatches.length === 4) {
            prizes.push("$100");
        }
        if (pb2 !== winningNumbers[5] && gameTwoMatches.length === 4) {
            prizes2.push("$100");
        }
        if (pb3 !== winningNumbers[5] && gameThreeMatches.length === 4) {
            prizes3.push("$100");
        }


        //Prizes Tier 7
        if (pb !== winningNumbers[5] && gameOneMatches.length === 5) {
            prizes.push("$50,000");
        }
        if (pb2 !== winningNumbers[5] && gameTwoMatches.length === 5) {
            prizes2.push("$50,000");
        }
        if (pb3 !== winningNumbers[5] && gameThreeMatches.length === 5) {
            prizes3.push("$50,000");
        }



        //Prizes Tier 8
        if (pb === winningNumbers[5] && gameOneMatches.length === 5) {
            prizes.push("$1,00,000");
        }
        if (pb2 === winningNumbers[5] && gameTwoMatches.length === 5) {
            prizes2.push("$1,00,000");
        }
        if (pb3 === winningNumbers[5] && gameThreeMatches.length === 5) {
            prizes3.push("$1,00,000");
        }

        //Prizes Tier 9
        if (pb === winningNumbers[5] && gameOneMatches.length === 6) {
            prizes.push("$JACKPOT!!!!");
            console.log("Wow!! YOU WON THE JACKPOT")
        }
        if (pb2 === winningNumbers[5] && gameTwoMatches.length === 6) {
            prizes2.push("$JACKPOT!!!!");
            console.log("Wow!! YOU WON THE JACKPOT")
        }
        if (pb3 === winningNumbers[5] && gameThreeMatches.length === 6) {
            prizes3.push("$JACKPOT!!!!");
            console.log("Wow!! YOU WON THE JACKPOT")
        }


        return (
            <div>
                <Hero>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-md left" style={{ marginTop: "0" }}>
                                <h4 className="logo" style={{ color: "whitesmoke" }}><b>{user.name.split(" ")[0]}'s </b><span id="pro">Dashboard</span></h4>
                            </div>
                            <div className="col-md right">


                                <ul className="icons">
                                    <li style={{ margin: "10px" }}>
                                        <FontAwesomeIcon icon={faEdit}
                                            className="icon1"
                                            onClick={this.handleEnterTixModal}
                                            style={{ color: "red", fontSize: "20px", marginTop: "10px", cursor: "pointer" }}
                                            data-tip="Enter Ticket #s"
                                            data-text-color="white"
                                        />
                                        <ReactTooltip />

                                        <ModalInput
                                            show={this.state.addModalShow}
                                            onHide={addModalClose}
                                            variant="primary"
                                        />
                                    </li>


                                    <li style={{ margin: "10px" }}>
                                        <FontAwesomeIcon icon={faClipboard}
                                            className="icon2"
                                            onClick={this.handleManageTixModal}
                                            style={{ color: "red", fontSize: "20px", marginTop: "10px", cursor: "pointer" }}
                                            data-tip="Manage/View Tickets"
                                            data-text-color="white"
                                        />
                                        <ReactTooltip />

                                        <ManageTix
                                            show={this.state.addModalShow2}
                                            onHide={addModalClose2}
                                            variant="primary"
                                        />

                                    </li>

                                    <li style={{ margin: "10px" }}>
                                        <FontAwesomeIcon icon={faChartBar}
                                            className="icon3"
                                            onClick={this.handleJackpotTrack}
                                            style={{ color: "red", fontSize: "20px", marginTop: "10px", cursor: "pointer" }}
                                            data-tip="Latest Jackpot Changes"
                                            data-text-color="white"
                                        />
                                        <JackpotModal
                                            id="thisOne"
                                            show={this.state.addModalShow3}
                                            onHide={addModalClose3}
                                            variant="primary"
                                        />
                                    </li>



                                    <li style={{ margin: "10px" }}>
                                        <FontAwesomeIcon icon={faDoorOpen}
                                            className="icon4"
                                            onClick={this.onLogoutClick}
                                            style={{ color: "red", fontSize: "20px", marginTop: "10px", cursor: "pointer" }}
                                            data-tip="Logout"
                                            data-text-color="white"
                                        />
                                        <ReactTooltip />
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <div className="row" style={{ marginBottom: "25px" }}>
                            <div className="col-md-4">
                                <div
                                    className="my-ticketNo"
                                    style={{
                                        color: "red",
                                        borderRadius: "12px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px",
                                        backgroundColor: "#D9D6CF"

                                    }}>

                                    <h6 style={{ color: "black" }}><b>YOUR TICKET#s</b></h6>
                                    <h4 className="my-ticket-no" id="my-ticket-no" style={{
                                        color: "red",
                                        backgroundColor: "white",
                                        borderTop: "solid black 1px",
                                        borderBottom: "solid black 1px",
                                        borderRadius: "1px"
                                    }} >
                                        <ul>
                                            <li >
                                                {recentNumber.no1}{"-"}
                                                {recentNumber.no2}{"-"}
                                                {recentNumber.no3}{"-"}
                                                {recentNumber.no4}{"-"}
                                                {recentNumber.no5}{"-"}
                                                <span style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    borderRadius: "45%",
                                                    padding: "2px"
                                                }}>{recentNumber.powerball}

                                                </span>
                                            </li>
                                            <li>
                                                {secRecentNo.no1}{"-"}
                                                {secRecentNo.no2}{"-"}
                                                {secRecentNo.no3}{"-"}
                                                {secRecentNo.no4}{"-"}
                                                {secRecentNo.no5}{"-"}
                                                <span style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    borderRadius: "45%",
                                                    padding: "2px"
                                                }}>{secRecentNo.powerball}

                                                </span>
                                            </li>
                                            <li >
                                                {thirdRecentNo.no1}{"-"}
                                                {thirdRecentNo.no2}{"-"}
                                                {thirdRecentNo.no3}{"-"}
                                                {thirdRecentNo.no4}{"-"}
                                                {thirdRecentNo.no5}{"-"}
                                                <span style={{
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    borderRadius: "45%",
                                                    padding: "2px"
                                                }}>{thirdRecentNo.powerball}

                                                </span>
                                            </li>
                                        </ul>

                                    </h4>
                                    <h6 style={{ color: "black" }}><b>FOR UPCOMING DRAW ON:</b></h6>
                                    <h4><NextDrawDate></NextDrawDate></h4></div>
                            </div>
                            <div className="col-md-3">
                                <div
                                    className="currentJpot"
                                    style={{
                                        fontSize: "15px",
                                        color: "red",
                                        borderRadius: "9px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        borderBottom: "solid red 4px",
                                        backgroundColor: "#D9D6CF",
                                        cursor: "pointer"
                                    }}
                                >

                                    <h4 style={{ color: "red" }}><em>CURRENT JACKPOT</em></h4>
                                    <h4 className="current-jackpot" style={{ color: "red" }} >

                                        <Jackpot />

                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div
                                    className="lastDraw"
                                    style={{
                                        fontSize: "15px",
                                        color: "red",
                                        borderRadius: "9px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        backgroundColor: "#D9D6CF",
                                        borderBottom: "solid red 4px"
                                    }}>
                                    POWERBALL# for : <LastDrawDate></LastDrawDate>
                                    <WinningNum></WinningNum>

                                    <h5 className="my-ticket-no" style={{ color: "red" }} >


                                    </h5></div>
                            </div>
                        </div>
                        <div className="row align-content-center justify-content-center text-align-center" style={{ marginBottom: "0" }}>
                            <div className="col-md-12">
                                <h4 style={{ color: "whitesmoke", fontFamily: "Quantico" }}>YOUR RESULTS:</h4>
                                <hr style={{ border: "solid darkred 1.75px" }}></hr>
                            </div>
                        </div>

                        <div className="row align-content-center justify-content-center" style={{ marginBottom: "50px" }}>

                            <div className="col-md-2">
                                <button id="myMatches"
                                    style={{
                                        minWidth: "75px",
                                        height: "75px",
                                        // backgroundColor: "red",
                                        display: "inline-block",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "5px",
                                        border: "solid red 3px",
                                        fontSize: "2.5rem",
                                        padding: "8px",
                                        color: "red"
                                    }}>
                                    <p id="my-matches">
                                        {gameOneMatches.length +
                                            gameTwoMatches.length + gameThreeMatches.length}
                                    </p>
                                    <p style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        fontFamily: "Quantico",
                                        marginBottom: "10px",
                                        marginTop: "0px",
                                        color: "whitesmoke"
                                    }}>
                                        MATCHES
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <br></br>

                            <div className="col-md justify-content-between" style={{
                                backgroundColor: "#D9D6CF",
                                margin: "2px",
                                width: "90%",
                                borderRadius: "15px",
                                padding: "8px",
                                borderTop: "solid red 3px",
                                borderBottom: "solid red 3px"
                            }}>

                                <div>
                                    <div id="gameOnePrize" style={{
                                        width: "auto",
                                        minWidth: "100px",
                                        height: "105px",
                                        backgroundColor: "whitesmoke",
                                        display: "inline-block",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "5px",
                                        border: "solid red 3px",
                                        fontSize: "4.3rem",
                                        color: "red"

                                    }}>
                                        <p id="prizes1">{p1(prizes)}</p>

                                    </div>
                                    <h5 id="prizeBoxes">GAME 1 WIN$</h5>
                                </div>
                            </div>

                            <div className="col-md justify-content-between" style={{
                                backgroundColor: "#D9D6CF",
                                margin: "2px",
                                width: "90%",
                                borderRadius: "15px",
                                padding: "8px",
                                borderTop: "solid red 3px",
                                borderBottom: "solid red 3px"
                            }}>

                                <div>
                                    <div id="gameTwoPrize" style={{
                                        width: "auto",
                                        minWidth: "100px",
                                        height: "105px",
                                        backgroundColor: "whitesmoke",
                                        display: "inline-block",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "5px",
                                        border: "solid red 3px",
                                        marginLeft: "5px",
                                        marginRight: "5px",
                                        fontSize: "4.3rem",
                                        color: "red"

                                    }}>
                                        <p id="prizes2">{p2(prizes2)}</p>

                                    </div>
                                    <h5 id="prizeBoxes">GAME 2 WIN$</h5>
                                </div>

                            </div>


                            <div className="col-md justify-content-between" style={{
                                backgroundColor: "#D9D6CF",
                                margin: "2px",
                                width: "90%",
                                borderRadius: "15px",
                                padding: "8px",
                                borderTop: "solid red 3px",
                                borderBottom: "solid red 3px"
                            }}>
                                <div>
                                    <div id="gameThreePrizes" style={{
                                        width: "auto",
                                        minWidth: "100px",
                                        height: "105px",
                                        backgroundColor: "whitesmoke",
                                        display: "inline-block",
                                        textAlign: "center",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "5px",
                                        border: "solid red 3px",
                                        fontSize: "4.3rem",
                                        color: "red"
                                    }}>
                                        <p id="prizes3">{p3(prizes3)}</p>

                                    </div>
                                    <h5 id="prizeBoxes">GAME 3 WIN$</h5>
                                </div>

                            </div>

                        </div>



                    </div>


                </Hero>
                <br></br>

            </div >
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