import React from "react";
import Home from "./Home";
import Home1 from "./Home1";

let token = localStorage.getItem("token");

const Front = () => {
    return (
        <div>
            { token ? <Home1 /> : <Home />}
        </div>
    )
}

export default Front;