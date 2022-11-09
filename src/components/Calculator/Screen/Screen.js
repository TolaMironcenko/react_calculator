// import { Textfit } from "react-textfit";
import "./Screen.css";
import React from "react";

const Screen = ({ value }) => {
    return (
        <div className="screen" mode="single" max={70}>
            {value}
        </div>
    );
};

export default Screen;