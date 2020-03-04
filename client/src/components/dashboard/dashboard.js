import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Hero from "./../Hero";
import "./style.css";
import Members from "../../pages/Members"


// import DeleteBtn from "./..DeleteBtn";
// import Jumbotron2 from "./..Jumbotron2";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "./..Form";

// import createBrowserHistory from 'createBrowserHistory';


class Dashboard extends Component {
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
                                <h5 style={{ color: "white" }}>
                                    <b>Welcome,</b><span style={{ color: "gold" }}>{user.name.split(" ")[0]}</span>
                                </h5>

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
                                <h2 className="logo" >POWER<span id="pro">BALLER's </span>HQ</h2>
                            </div>

                        </div>


                        <div className="row justify-content-between">
                            <div className="col-auto mr-auto">
                                <h4 className="my-ticket-no" style={{ color: "whitesmoke" }} >
                                    12-34-45-2-66<span id="pro">18</span>
                                </h4>
                            </div>
                            <div className="col-auto">
                                <h4 className="current-jackpot" style={{ color: "whitesmoke" }} >
                                    $90,000,000
                                </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col center-align" style={{ color: "whitesmoke" }}>
                                <h6>Winnings Go Here</h6>
                            </div>

                        </div>

                    </div>


                </Hero>
                <br></br>

                <Members></Members>

            </div>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);