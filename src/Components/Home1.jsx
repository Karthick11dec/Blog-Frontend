import React, { Fragment, useEffect, useState } from "react";
import Navbar1 from "./Navbar1";
import Allblogs from "./Allblogs";
import Zero from "./Zero";

const Home1 = () => {

    const [zero,setzero] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("https://blog-backend-fs.herokuapp.com/myblogs", {
            headers: {
                authorization: token
            }
        })
            .then((data) => data.json())
            .then((response) => {
                if (response.myblogs.length === 0) {
                    setzero("zero")
                    // console.log("zero")
                }
            })
    }, [token]);

    return (
        <Fragment>
            <Navbar1 />
            {window.history.backward()}
            { zero ? <Zero /> : <Allblogs /> }
        </Fragment>
    )
}
export default Home1;