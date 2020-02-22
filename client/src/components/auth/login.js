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
            this.props.history.push("/dashboard");
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
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
                    <div className="row">
                        <div className="col">
                            <h2 className="style">Login with Social Media or PB<span id="pro">PRO</span> Login</h2>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-6">
                            <Link to={'#'} className="fb btn">
                                <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                        </Link>
                            <Link to={'#'} className="google btn">
                                <i className="fa fa-google fa-fw"></i> Login with Google+
                        </Link>
                        </div>
                        <div className="col-6">

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
                            <label htmlFor="email" style={{ color: "whitesmoke" }}>Email</label>
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
                            <label htmlFor="password" style={{ color: "whitesmoke" }}>Password</label>
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>

                            <button
                                type="submit"
                                style={{ color: "white" }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Login
                            </button>
                        </div>


                    </div>
                </form>

                <div className="bottom-container">
                    <div className="row">
                        <div className="col">
                            <Link to={"/register"} style={{ color: "white" }} className="btn">Sign up</Link>
                        </div>
                        <div className="col">
                            <Link to={"#"} style={{ color: "white" }} className="btn">Forgot password?</Link>
                        </div>
                    </div>
                </div>
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