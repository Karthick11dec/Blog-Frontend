import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/navbar1.css";
import NewPost from "./NewPost";

const Navbar1 = () => {

    const [name, setname] = useState("");

    const history = useHistory();

    const token = localStorage.getItem("token");

    const Logout = () => {
        // localStorage.clear();
        // window.location.replace("https://blog-frontend-fs.netlify.app/");
        history.replace('/');
    }

    useEffect(() => {
        const get = async () => {
            let data = await fetch("https://blog-backend-fs.herokuapp.com/allusers", {
                headers: {
                    "Content-Type": "application/json",
                    authorization: token
                }
            });
            let response = await data.json();
            let name = response.collection.username.split("");
            setname(name[0].toUpperCase());
        }
        get();
    }, [token]);

    return (
        <Fragment>
            <nav className='navbar sticky height'>
                <div>
                    <div className="navbar-brand"><h4 className="blog"><i className="fab fa-blogger icon"></i>  BLOGGER.com</h4></div>
                </div>
                <div>

                    <button type="button" className="btn newpost" data-toggle="modal" data-target="#newpostModal">
                        NewPost
                    </button>

                    <div className="modal fade pt-5 mt-3" id="newpostModal" aria-labelledby="newpostModalLabel" aria-hidden="true" style={{ width: "80vw" }}>
                        <div className="modal-dialog">
                            <div className="modal-content" style={{ width: "80vw" }} >
                                <div style={{ width: "60vw", backgroundColor: "lightgreen" }} className="pr-5 pt-2">
                                    <button data-dismiss="modal" className="btn frame"><b>&times;</b></button>
                                </div>
                                <div style={{ width: "60vw" }}>
                                    <NewPost />
                                </div>
                                <div style={{ width: "60vw", backgroundColor: "lightgreen" }} className="pb-4 pr-5">
                                    <button data-dismiss="modal" className="btn frame"><b>Close</b></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ float: 'right' }}>
                    <button className="btn margin2"><b>{name}</b></button>
                    <button className="btn margin3" onClick={Logout}>Logout</button>
                </div>
            </nav>
        </Fragment>
    )
}
export default Navbar1;