import React, { useState } from "react";
import '../css/newpost.css'

const NewPost = () => {

    const [heading, setheading] = useState("");
    const [url, seturl] = useState("");
    const [body, setbody] = useState("");
    const [readme, setreadme] = useState("");

    const token = localStorage.getItem("token");

    const Add = (e) => {
        e.preventDefault();
        fetch('https://blog-backend-fs.herokuapp.com/newpost', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
            body: JSON.stringify({
                heading: heading,
                url: url,
                body: body,
                readme: readme
            })
        })
            .then((data) => data.json())
            .then((res) => {
                if (res.newpost) {
                    alert("your blog has been posted");
                    window.location.reload();

                }
                else {
                    alert("something went wrong with add newpost");
                }
            })
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <form style={{ width: "60vw", background: "lightgreen" }} className="pl-5 pr-5">
                    <div className="text-center"><h3><b>Write Your New Blog</b></h3></div>
                    <div className="form-group">
                        <label htmlFor="heading"><b>Heading :</b></label>
                        <input
                            id="heading"
                            type="text"
                            className="form-control mt-3 ml-3"
                            value={heading}
                            onChange={(e) => { setheading(e.target.value) }}
                            maxlength="80"
                        />
                    </div>

                    <div className="form-group pt-2">
                        <label htmlFor="body"><b>Content :</b></label>
                        <textarea
                            rows="6"
                            id="body"
                            type="text"
                            className="form-control mt-3 ml-3"
                            value={body}
                            onChange={(e) => { setbody(e.target.value) }}
                            maxlength="400"
                        />
                    </div>

                    <div className="form-group pt-2">
                        <label htmlFor="url"><b>Image URL :</b></label>
                        <input
                            id="url"
                            type="text"
                            className="form-control mt-3 ml-3"
                            value={url}
                            onChange={(e) => { seturl(e.target.value) }}
                        />
                    </div>

                    <div className="form-group pt-2">
                        <label htmlFor="readme"><b>Readme :</b></label>
                        <input
                            id="readme"
                            type="number"
                            className="form-control mt-3 ml-3"
                            value={readme}
                            onChange={(e) => { setreadme(e.target.value) }}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn danger" onClick={(e) => Add(e)}>Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default NewPost;