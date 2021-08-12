import React from "react";

function Header() {
    return (
        <div className="display-flex flex-direction-row align-items-center">
            <h1 className="day-number-text">12</h1>
            
            <div className="padding-horizontal-half margin-vertical-auto">
                <p className="month-text">JAN</p>
                <p className="year-text">2016</p>
            </div>

            <p className="day-text">Tuesday</p>

        </div>
    );
}

export default Header;