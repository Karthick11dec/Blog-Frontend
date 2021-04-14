import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Edit = () => {

    let { id } = useParams();  

    const [head, sethead] = useState("");
    const [url, seturl] = useState("");
    const [body, setbody] = useState("");
    const [readme, setreadme] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch(`https://blog-backend-fs.herokuapp.com/oneget/${id}`, {
            headers: {
                authorization: token
            }
        })
            .then((data) => data.json())
            .then((response) => {
                sethead(response.onepost.heading);
                seturl(response.onepost.url);
                setbody(response.onepost.body);
                setreadme(response.onepost.readme);
            })
    }, [id, token])

    const Update = (e) => {
        e.preventDefault();
        fetch(`https://blog-backend-fs.herokuapp.com/onemodify/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
            body: JSON.stringify({
                heading: head,
                url: url,
                body: body,
                readme: readme
            })
        })
            .then((data) => data.json())
            .then((res) => {
                if (res.update) {
                    alert("your blog has been Updated");
                    window.location.replace("https://blog-frontend-fs.netlify.app/home1")
                }
                else {
                    alert("something went wrong with Update newpost");
                }
            })
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <form style={{ width: "60vw", background: "lightgreen" }} className="pl-5 pr-5 pb-5">
                    <div className="text-center"><h3><b>Update Your Blog with New Contents</b></h3></div>
                    <div className="form-group">
                        <label htmlFor="head"><b>Heading :</b></label>
                        <input
                            id="head"
                            type="text"
                            className="form-control mt-3 ml-3"
                            value={head}
                            onChange={(e) => { sethead(e.target.value) }}
                            maxlength="80"
                        />
                    </div>

                    <div className="form-group pt-2">
                        <label htmlFor="content"><b>Content :</b></label>
                        <textarea
                            rows="6"
                            id="content"
                            type="text"
                            className="form-control mt-3 ml-3"
                            value={body}
                            onChange={(e) => { setbody(e.target.value) }}
                            maxlength="400"
                        />
                    </div>

                    <div className="form-group pt-2">
                        <label htmlFor="image"><b>Image URL :</b></label>
                        <input
                            id="image"
                            type="text"
                            className="form-control mt-3 ml-3"
                            value={url}
                            onChange={(e) => { seturl(e.target.value) }}
                        />
                    </div>

                    <div className="form-group pt-2">
                        <label htmlFor="read"><b>Readme :</b></label>
                        <input
                            id="read"
                            type="number"
                            className="form-control mt-3 ml-3"
                            value={readme}
                            onChange={(e) => { setreadme(e.target.value) }}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn danger" onClick={(e) => { Update(e) }}>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Edit;