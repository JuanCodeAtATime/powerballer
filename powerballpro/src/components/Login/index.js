import React from "react";
import "./style.css"

function Login() {
    return (
        <div className="container">
            <form action="/action_page.php">
                <br></br>
                <div className="row">
                    <div className="col">
                        <h2 className="style">Login with Social Media or PB<span id="pro">PRO</span> Login</h2>
                    </div>
                </div>
                <br></br>
                <div className="row">

                    <div className="col-6">
                        <a href={'#'} className="fb btn">
                            <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                        </a>
                        <a href={'#'} className="google btn">
                            <i className="fa fa-google fa-fw"></i> Login with Google+
                        </a>
                    </div>
                    <div className="col-6">


                        <input type="text" name="username" placeholder="Username" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <input type="submit" value="Login" />

                    </div>


                </div>
            </form>

            <div className="bottom-container">
                <div className="row">
                    <div className="col">
                        <a href={"#"} style={{ color: "white" }} className="btn">Sign up</a>
                    </div>
                    <div className="col">
                        <a href={"#"} style={{ color: "white" }} className="btn">Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Login;