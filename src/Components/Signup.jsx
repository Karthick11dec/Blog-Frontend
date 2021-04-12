import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import '../css/signup.css';

const Signup = () => {

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [buttonHidden, setButtonHidden] = useState(true);

    const history = useHistory();

    useEffect(() => {
        if (username.length > 0 && password.length >= 8 && email.length > 0 && email.includes("@")) {
            setButtonHidden(false)
        } else {
            setButtonHidden(true)
        }
    }, [username, email, password])

    const erase = () => {
        setusername("");
        setemail("");
        setpassword("");
    }

    const Sign = (e) => {
        e.preventDefault();

        if (username !== "" && email !== "" && password !== "") {
            if (email.includes("@") && password.length >= 8) {

                const senddata = async () => {
                    await fetch("http://localhost:3000/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ name: username, mail: email, code: password })
                    });

                    erase();
                    alert("Hello there !!! your detailes are register successfully , login to continue the service");
                    history.push("/login");
                    // window.location.href = "http://localhost:3001/login"
                }
                senddata();

            } else {
                erase();
                alert("your entered incorrect format of mail (OR) password not contain atleast 8 characters")
            }
        } else {
            erase();
            alert("you missed any one field requirement...please fill all the fields correctly")
        }
    }

    return (
        <React.Fragment>
            <div className="d-flex justify-content-center pt-5">
                <div className="card" style={{ width: "30vw" }}>
                    <div className="card-header"><h2 className="bolder">Signup</h2></div>
                    <div className="card-body p-3">
                        <form>
                            <div className="p-2">
                                <label htmlFor="username"><b>Username : </b></label>
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
                                    className="form-control "
                                    placeholder="ex.karthickraja"
                                    required
                                />
                            </div>
                            <div className="p-2">
                                <label htmlFor="email"><b>Email : </b></label>
                                <input
                                    id="email"
                                    value={email}
                                    type="email"
                                    onChange={(e) => setemail(e.target.value)}
                                    className="form-control "
                                    required
                                    placeholder="ex.karthick@gmail.com"
                                />
                            </div>
                            <div className="p-2">
                                <label htmlFor="Password"><b>Password : </b></label>
                                <input
                                    id="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    className="form-control "
                                    required
                                    placeholder="enter password with atleast 8 alphanumerics"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="d-flex justify-content-center p-2"><button className="btn signup" onClick={Sign} disabled={buttonHidden}>Sign Up</button></div>
                    <div className="card-footer"><span style={{ fontSize: "15px", fontWeight: "bold" }}>Already have an account ?</span><Link to="/login" className="login">Login</Link></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Signup;