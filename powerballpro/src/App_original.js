import React from 'react';
// import logo from './pbbg.jpg';
import './App.css';

function App() {
    return (
        <div className="App container">
            <header className="App-header">
                <h1 className="pb-title">
                    POWERBALL <span id="pro">PRO</span>
                </h1>
                <br></br>
                <div className="buttons">
                    <button class="btn bg-primary white" >
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Login
        </a>
                    </button>
                    <button className="btn bg-danger white">
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Signup
        </a>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
