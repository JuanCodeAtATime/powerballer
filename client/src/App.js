import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./pages/Landing";
import Login from "./components/auth/login";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Nomatch from "./pages/Nomatch";
import Register from "./components/auth/register"

// import Signup from "./pages/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Numbers from "./components/Numbers/numbers";
// import ControlledCarousel from "./pages/Carousel";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename="/powerball-pro.now.sh">
          <div>
            <Nav />
            <Wrapper>
              <Route exact path="/" component={Landing} />
              {/* <Route exact path="/carousel" component={ControlledCarousel} /> */}
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              {/* <Route component={Nomatch} /> */}
              <Switch>
                <PrivateRoute exact path="/numbers" component={Numbers} />
              </Switch>
            </Wrapper>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;