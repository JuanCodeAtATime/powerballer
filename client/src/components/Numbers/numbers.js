import React, { Component } from "react";
import API from "../../utils/API";
import WinningNum from "../../pages/WinningNum";
import { logoutUser } from "../../actions/authActions";
import LastDrawDate from "../LastDrawDate";
import Jackpot from "../Jackpot/Jackpot";
import NextDrawDate from "../nextdrawdate.js"
import ModalInput from "../Modal/index";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Winnings from "../Winnings/index";
import JackpotModal from "../JackpotModal/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faMoneyBillAlt, faChartBar, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import Hero from "../Hero";
import 'moment-timezone';
import "./style.css";



class Numbers extends Component {
    state = {
        dateTime: [],
        dateForToolTip1: [],
        numbers: [],
        addModalShow: false,
        addModalShow2: false,
        addModalShow3: false
    };

    componentDidMount() {
        // this.loadRecentNo();
        this.loadLastDrawDate();
        this.loadJackpotChangeDate();
        // this.formatDates();        
    }

    //These three functions handle modal buttons
    handleEnterTixModal = event => {
        event.preventDefault();
        this.setState({ addModalShow: true });
    };

    handleWinningsModal = event => {
        event.preventDefault();
        this.setState({ addModalShow2: true });
    };

    handleJackpotTrack = event => {
        event.preventDefault();
        this.setState({ addModalShow3: true });
    };

    //loadRecentNo loads and renders most recent inputted number in upper left section of Hero

    loadJackpotChangeDate = () => {
        API.loadChartData()
            .then(res =>
                this.setState({
                    ...this.state,
                    dateForToolTip1: res.data[0].prizes.asOfDate
                })

            )
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



        return (
            <div>
                <Hero>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-md left" style={{ marginTop: "0" }}>
                                <h4 className="logo" style={{ color: "whitesmoke" }}>
                                    <b>
                                        {user.name.split(" ")[0]}'s
                                    </b><span id="pro"> Dashboard</span></h4>
                            </div>
                            <div className="col-md right">
                                <ul className="icons">


                                    <li style={{ margin: "10px" }}>
                                        <FontAwesomeIcon icon={faMoneyBillAlt}
                                            className="icon2"
                                            onClick={this.handleWinningsModal}
                                            style={{ color: "whitesmoke", fontSize: "25px", marginTop: "10px", cursor: "pointer" }}
                                            data-tip="How to Win"
                                            data-text-color="white"
                                        />
                                        <ReactTooltip />

                                        <Winnings
                                            show={this.state.addModalShow2}
                                            onHide={addModalClose2}
                                            variant="primary"
                                        />

                                    </li>

                                    <li style={{ margin: "10px" }}>
                                        <FontAwesomeIcon icon={faChartBar}
                                            className="icon3"
                                            onClick={this.handleJackpotTrack}
                                            style={{ color: "whitesmoke", fontSize: "25px", marginTop: "10px", cursor: "pointer" }}
                                            data-tip="Latest Jackpot Changes"
                                            data-text-color="white"
                                        />
                                        <ReactTooltip />
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
                                            style={{ color: "whitesmoke", fontSize: "25px", marginTop: "10px", cursor: "pointer" }}
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

                                    <h4>MANAGE MY TICKET#s</h4>

                                    <h4 className="my-ticket-no realticket" id="my-ticket-no"
                                        style={{
                                            color: "black",
                                            backgroundColor: "white",
                                            borderTop: "solid black 1px",
                                            borderBottom: "solid black 1px",
                                            borderRadius: "1px",
                                        }}

                                    >
                                        <FontAwesomeIcon icon={faEdit}
                                            className="edit"
                                            onClick={this.handleEnterTixModal}
                                            style={{
                                                color: "white",
                                                fontSize: "25px",
                                                marginTop: "5px",
                                                cursor: "pointer"
                                            }}
                                            data-tip="Enter Ticket Number"
                                            data-text-color="white"

                                        />
                                        <ReactTooltip />
                                        <ModalInput
                                            show={this.state.addModalShow}
                                            onHide={addModalClose}
                                            variant="primary"
                                        />


                                    </h4>
                                    <b>FOR UPCOMING DRAW ON:</b>
                                    <NextDrawDate></NextDrawDate>

                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="currentJpot my-ticketNo" style={{ backgroundColor: "#D9D6CF" }}>
                                    <h4 style={{ color: "red", backgroundColor: "#D9D6CF" }}><em><b>CURRENT JACKPOT</b></em></h4>
                                    <h4 className="current-jackpot"
                                        style={{ color: "red", cursor: "pointer" }}
                                    >
                                        <Jackpot />
                                    </h4>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div
                                    className="lastDraw my-ticketNo"
                                    style={{
                                        fontSize: "15px",
                                        color: "red",
                                        borderRadius: "9px",
                                        marginTop: "10px",
                                        borderTop: "solid red 4px",
                                        backgroundColor: "#D9D6CF",
                                        borderBottom: "solid red 4px"
                                    }}>
                                    <h4>POWERBALL DRAW DATE:
                                        <LastDrawDate></LastDrawDate>
                                    </h4>
                                    <WinningNum></WinningNum>

                                    <h5 className="my-ticket-no" style={{ color: "red" }} >


                                    </h5></div>
                            </div>
                        </div>
                        {/* <div className="row align-content-center justify-content-center text-align-center" style={{ marginBottom: "0" }}>
                            <div className="col-md-12">
                                <h4 style={{ color: "whitesmoke", fontFamily: "Quantico" }}>YOUR RESULTS:</h4>
                                <hr style={{ border: "solid darkred 1.75px" }}></hr>
                            </div>
                        </div> */}

                        {/* <div className="row align-content-center justify-content-center" style={{ marginBottom: "50px" }}>

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
                                    {/* <p id="my-matches">
                                        {gameOneMatches.length +
                                            gameTwoMatches.length + gameThreeMatches.length}
                                    </p> */}
                        {/* <p style={{
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
                        </div> */}
                        {/* 
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
                                        {/* <p id="prizes1">{p1(prizes)}</p> */}

                        {/* </div>
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
                                        {/* <p id="prizes2">{p2(prizes2)}</p> */}
                        {/* 
                                    </div>
                                    <h5 id="prizeBoxes">GAME 2 WIN$</h5>
                                </div> */}

                        {/* </div>


                            <div className="col-md justify-content-between" style={{
                                backgroundColor: "#D9D6CF",
                                margin: "2px",
                                width: "90%",
                                borderRadius: "15px",
                                padding: "8px",
                                borderTop: "solid red 3px",
                                borderBottom: "solid red 3px"
                            }}> */}
                        {/* <div>
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
                                    }}> */}
                        {/* <p id="prizes3">{p3(prizes3)}</p> */}
                        {/* 
                                    </div>
                                    <h5 id="prizeBoxes">GAME 3 WIN$</h5>
                                </div>

                            </div>

                        </div> */}



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

