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
import WinningNum from "../../pages/WinningNum";
import LastDrawDate from "../LastDrawDate";
import 'moment';
import 'moment-timezone';




class Numbers extends Component {
    state = {
        dateTime: [],
        recentNumber: '',
        powerballs: ""

    };

    componentDidMount() {
        this.loadRecentNo();
        this.loadLastDrawDate();

    }

    loadRecentNo = () => {
        API.getNumbers()
            .then(res =>
                this.setState({
                    recentNumber: res.data[0],
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
                                        color: "white",
                                        border: "solid white 1px",
                                        width: "95px",
                                        borderRadius: "3px",
                                        letterSpacing: "1px",
                                        lineHeight: "6px"
                                    }}
                                    onClick={this.onLogoutClick}
                                    className="btn btn-small waves-effect waves-light hoverable black accent-3"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col center-align" style={{ marginTop: "0" }}>
                                <h4 className="logo" style={{ color: "white" }}>Welcome, <span id="pro">{user.name.split(" ")[0]}</span></h4>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col center-align" style={{ marginTop: "0", display: "block" }}>
                                <label for="my-matches" style={{ fontSize: "20px", color: "white", display: "block" }}>YOUR RESULTS FOR: </label>

                                <h4><LastDrawDate />
                                </h4>

                                <h6 style={{ color: "white" }}>{console.log(this.state.powerballs)}</h6>
                            </div>

                        </div>
                        <div className="row align-content-center">
                            <div className="col center-align" style={{ marginTop: "0" }}>
                                <label for="my-matches" style={{ fontSize: "20px", color: "white", display: "block" }}>MATCHES: </label>
                                <button id="myMatches" style={{
                                    width: "auto",
                                    minWidth: "100px",
                                    height: "105px",
                                    backgroundColor: "red",
                                    display: "inline-block",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "5px",
                                    fontSize: "4.3rem",
                                    color: "white"
                                }}>
                                    <p id="my-matches">3</p></button>
                            </div>
                            <div className="col center-align" style={{ marginTop: "0" }}>
                                <label for="my-matches" style={{ fontSize: "20px", color: "white", display: "block" }}>PRIZES: </label>
                                <button id="myPrizes" style={{
                                    width: "auto",
                                    minWidth: "100px",
                                    height: "105px",
                                    backgroundColor: "red",
                                    display: "inline-block",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "5px",
                                    fontSize: "4.3rem",
                                    color: "white"
                                }}>
                                    <p id="my-prizes">$4</p></button>
                            </div>
                        </div>


                        <div className="row justify-content-between">

                            <div className="col-auto">
                                <label for="currentJackpot" style={{ fontSize: "20px", color: "white" }}>Current Jackpot</label>
                                <h4 className="current-jackpot" style={{ color: "red" }} >
                                    <Jackpot></Jackpot>
                                </h4>
                            </div>
                        </div>

                    </div>


                </Hero>
                <br></br>
                <div className="noInput"> <label for="ticketNo" style={{ color: "white", fontSize: "30px", marginLeft: "15px", textAlign: "left" }}>Enter Ticket#</label>
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