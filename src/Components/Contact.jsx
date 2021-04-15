import React, { useState } from "react";
import About from "./About";
import "../css/about.css";

const Contact = () => {

    const [name, setname] = useState("");
    const [mail, setmail] = useState("");
    const [message, setmessage] = useState("");

    const Send = (e) => {
        e.preventDefault();
        fetch("https://blog-backend-fs.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: mail,
                message: message
            })
        })
            .then((res) => res.json())
            .then((mail) => {
                if (mail.data) {
                    alert("your mail reached us...will look into it,resolve and contact you")
                }
            })
    }

    return (
        <div>
            <About />
            <div className="d-flex justify-content-center container-fluid bg pb-4">
                <div className="row">
                    <h2 className="col-12 text-center pt-2 pb-4" style={{fontWeight:"900"}}>Reach Us</h2>
                    <form style={{ width: "36vw" }} className="border p-4 col-12" >
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input id="name"
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => { setname(e.target.value) }}
                                required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input id="email"
                                type="email"
                                className="form-control"
                                value={mail}
                                onChange={(e) => { setmail(e.target.value) }}
                                required></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                type="text"
                                className="form-control"
                                rows="6"
                                value={message}
                                onChange={(e) => { setmessage(e.target.value) }}
                                required />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline send" onClick={(e) => { Send(e) }}>Reach Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;