import React, { useEffect, useState } from "react";
import '../css/reset.css';

const Reset = () => {

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

    const Modify = (e) => {
        e.preventDefault();

        if (email !== "" && password !== "") {
            if (email.includes("@") && password.length >= 8) {

                const senddata = async () => {
                    await fetch("https://blog-backend-fs.herokuapp.com/reset", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ mail: email, code: password })
                    })
                        .then((data) => data.json())
                        .then((res) => {

                            if (res.message === "user not found") {
                                alert("user not found")
                            }
                            else if (res.message === "entered password is same as existing one") {
                                alert("entered password is same as existing one");
                            }
                            else {
                                erase();
                                alert("Hello there !!! Password reset successfully");
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
                    <div className="card-header"><h2 className="bolder">Reset Password</h2></div>
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
                                <label htmlFor="Password"><b>New Password : </b></label>
                                <input
                                    id="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    className="form-control "
                                    required
                                    placeholder="enter new password with 8 chars"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="d-flex justify-content-center p-2"><button className="btn signup text-center" disabled={btn} onClick={Modify}>Reset</button></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Reset;