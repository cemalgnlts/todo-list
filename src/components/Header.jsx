import React from "react";

function Header() {
    const date = new Date();

    return (
        <div className="display-flex flex-direction-row align-items-center">
            <h1 className="day-number-text">{date.getDate()}</h1>
            
            <div className="padding-horizontal-half margin-vertical-auto">
                <p className="month-text">{date.toLocaleDateString(navigator.language, { month: "short" })}</p>
                <p className="year-text">{date.getFullYear()}</p>
            </div>

            <p className="day-text">{date.toLocaleDateString(navigator.language, { weekday: "long" })}</p>
        </div>
    );
}

export default Header;