import React from "react";
import "./style.css";

function Powerballs() {
    return (
        <div className="powerballs">
            <div className="powerballs-wrap">
                <span className="powerballNumber powerball-number-1">12</span>

            </div>

            <div className="powerballs-wrap">
                <span className="powerballNumber powerball-number-2">4</span>

            </div>


            <div className="powerballs-wrap">
                <span className="powerballNumber powerball-number-3">4</span>

            </div>
            <div className="powerballs-wrap">
                <span className="powerballNumber powerball-number-4">6</span>

            </div>
            <div className="powerballs-wrap">
                <span className="powerballNumber powerball-number-5">5</span>

            </div>
            <div className="powerballs-wrap powerball-redball">
                <span className="powerballNumber powerball-redball">10</span>

            </div>
        </div>
    );
}

export default Powerballs;
