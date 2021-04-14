import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [btn, setbtn] = useState(true);

    useEffect(() => {
        if (email.length > 0 && email.includes("@") && password.length >= 8) {
            setbtn(false);
        } else {
            setbtn(true);
        }
    }, [email, password])

    const erase = () => {
        setemail("");
        setpassword("");
    }

    const Logging = (e) => {
        e.preventDefault();

        if (email !== "" && password !== "") {
            if (email.includes("@") && password.length >= 8) {

                const senddata = async () => {
                    await fetch("https://blog-backend-fs.herokuapp.com/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ mail: email, code: password })
                    })
                        .then((data) => data.json())
                        .then((data) => {
                            if (data.token) {
                                localStorage.setItem('token', data.token);
                                erase();
                                alert("Hello there !!! login successfully");

                                window.location.replace("http://localhost:3001/home1");
                            }
                            else {
                                console.log("token not yet set to localstorage")
                                alert("entered datails are not valid")
                            }
                        })
                        .catch((error) => console.log(error));
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
                    <div className="card-header"><h2 className="bolder">Login</h2></div>
                    <div className="card-body p-3">
                        <form>
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
                    <div className="d-flex justify-content-center p-2"><button className="btn signup" onClick={Logging} disabled={btn}>Login</button></div>
                    <div className="card-footer"><span style={{ fontSize: "15px", fontWeight: "bold" }}>Forgot Password ?</span><Link to="/email" className="login">Click Here</Link></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Login;