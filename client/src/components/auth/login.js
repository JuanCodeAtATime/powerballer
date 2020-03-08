import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "./style.css"


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };

    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/numbers");
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/numbers"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    onSubmit = e => {
        e.preventDefault();


        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);

        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter


    };
    render() {
        const { errors } = this.state;


        return (
            <div className="container">
                <form noValidate onSubmit={this.onSubmit}>
                    <br></br>
                    <div className="row justify-content-center">
                        <div className="col-md-5" style={{ backgroundColor: "white", opacity: ".88", borderRadius: "5px", padding: "10px" }}>
                            <Link to="/" className="btn-flat waves-effect" style={{ color: "black" }}>
                                <i className="material-icons left" style={{ color: "#0056b3" }}>keyboard_backspace</i> Back to
                                home
            </Link>

                            <h3><b>POWER<span id="pro">BALLER </span></b><b style={{ color: "#0275d8" }}>Login</b></h3>

                            <p style={{ color: "black" }}>
                                Need to create account? <Link to="/register">Create Account</Link>
                            </p>
                            <input
                                onChange={this.onChange}
                                value={this.state.email}

                                error={errors.email}
                                id="email"
                                type="email"
                                className={classnames("", {
                                    invalid: errors.email || errors.emailnotfound
                                })}

                            />
                            <label htmlFor="email" style={{ color: "black" }}>Email</label>
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>

                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                                className={classnames("", {
                                    invalid: errors.password || errors.passwordincorrect
                                })}
                            />
                            <label htmlFor="password" style={{ color: "black" }}>Password</label>
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>

                            <button
                                type="submit"
                                style={{ color: "white", marginBottom: "5px" }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Login
                            </button>
                            <br></br>
                        </div>


                    </div>
                </form>


            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);