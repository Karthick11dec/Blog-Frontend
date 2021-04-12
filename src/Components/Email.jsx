import React, { useEffect, useState } from "react";
import "../css/login.css";

const Email = () => {

    const [email, setemail] = useState("");
    const [btn, setbtn] = useState(true);

    useEffect(() => {
        if (email.length > 0 && email.includes("@")) {
            setbtn(false);
        } else {
            setbtn(true);
        }
    }, [email])

    const erase = () => {
        setemail("");
    }

    const Forgot = (e) => {
        e.preventDefault();

        if (email.includes("@") && email.length > 0) {

            const senddata = async () => {
                await fetch("http://localhost:3000/link", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ mail: email })
                })
                    .then((data) => data.json())
                    .then((res) => {
                        if (res.data) {

                            erase();
                            console.log(res.message)
                            alert("Hello there !!! Reset link is sent to your Email...please check it.");

                            window.location.href = "http://localhost:3001/login"
                        } else {
                            console.log(res.message);
                            alert("Entered mail is not valid");
                        }
                    })
                    .catch((error) => console.log(error));
            }
            senddata();

        } else {
            erase();
            alert("your entered incorrect format of email (or) not containing atleast 8 char")
        }
    }


    return (
        <React.Fragment>
            <div className="d-flex justify-content-center pt-5">
                <div className="card" style={{ width: "30vw" }}>
                    <div className="card-header"><h2 className="bolder">Forgot Password</h2></div>
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
                        </form>
                    </div>
                    <div className="d-flex justify-content-center p-2"><button className="btn signup" onClick={Forgot} disabled={btn}>Reset</button></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Email;