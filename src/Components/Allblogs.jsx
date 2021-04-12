import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../css/allblogs.css";
const Allblogs = () => {

    const history = useHistory();

    const [state, setstate] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const getdata = async () => {
            let data = await fetch("http://localhost:3000/myblogs", {
                headers: {
                    authorization: token
                }
            });
            let response = await data.json();
            setstate(response.myblogs);
        }
        getdata();
    }, [token]);

    const Getone = async (id) => {
        history.push(`/edit/${id}`);
    }

    const Deleteone = async (id) => {
        let data = await fetch(`http://localhost:3000/onedelete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            }
        });
        let response = await data.json();

        if (response.find) {
            alert("blog has been deleted successfully");
            window.location.reload();
        } else {
            // console.log(response.message);
            alert("there is matching id found");
        }
    }

    return (
        <Fragment>
            {state.map((elem, index) => (
                <div key={index}>
                    <div className="d-flex justify-content-center pt-4" style={{ backgroundColor: "black" }}>
                        <div className="card" style={{ width: "60vw" }}>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div style={{ fontSize: "15px" }} ><b className="ml-2">{elem.readme} mins</b> Read
                                              <div style={{ fontSize: "14px", fontWeight: "bold", float: "right" }} >{elem.date}<span className="pl-2 mr-3">{elem.time}</span></div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div><h4 className="fontsize p-3">{elem.heading}</h4></div>
                                        </div>
                                        <div className="col-8">
                                            <div style={{ fontSize: "18px", backgroundColor: "lightyellow" }} className="p-3 pb-3">{elem.body}</div>
                                        </div>
                                        <div className="col-4">
                                            <img src={elem.url} alt=".." className="img"></img>
                                        </div>
                                    </div>
                                    <div className="row pt-3">
                                        <div className="col-2">
                                            <button onClick={() => { Getone(elem._id) }} className="btn edit">Update</button>
                                        </div>
                                        <div className="col-2 text-center" style={{ color: "red" }} onClick={() => { Deleteone(elem._id) }} >
                                            <button className="btn delete"><b>Delete</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div>
            </div>
        </Fragment>
    )
}
export default Allblogs;