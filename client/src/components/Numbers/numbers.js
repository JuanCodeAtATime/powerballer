import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Hero from "../Hero";
import "./style.css";
import Powerballinput from "../../pages/Members";
import Jackpot from "../Jackpot/Jackpot";

class Numbers extends Component {
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
                            </div>
                            <div className="col-auto">
                                <button
                                    style={{
                                        width: "125px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}
                                    onClick={this.onLogoutClick}
                                    className="btn btn-small waves-effect waves-light hoverable red accent-3"
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


                        <div className="row justify-content-between">
                            <div className="col-auto mr-auto">
                                <label for="my-ticketNo" style={{ fontSize: "20px", color: "white" }}>My Ticket#</label>
                                <h4 className="my-ticket-no" style={{ color: "whitesmoke" }} >
                                    12-34-45-2-66<span id="pro">18</span>
                                </h4>
                            </div>
                            <div className="col-auto">
                                <label for="currentJackpot" style={{ fontSize: "20px", color: "white" }}>Current Jackpot</label>
                                <h4 className="current-jackpot" style={{ color: "red" }} >
                                    <Jackpot></Jackpot>
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            {/* <div className="col center-align" style={{ color: "whitesmoke" }}>
                                <h6>Winnings Go Here</h6>
                            </div> */}

                        </div>

                    </div>


                </Hero>
                <br></br>
                <div className="noInput"> <label for="ticketNo" style={{ color: "white", fontSize: "30px", marginLeft: "15px", textAlign: "center" }}>Enter Ticket#</label>
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