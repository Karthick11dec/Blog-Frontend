import React from "react";
import '../css/about.css'

const About = () =>{
    return(
        <div className="container-fluid p-4 bg">
            <h2 className="d-flex justify-content-center"style={{fontWeight:"900"}}>About us</h2>
            <div style={{fontWeight:"bold",textAlign:"center"}} className="p-3">
                Our Blogger app will Provide a services to connect,explore and gather knowledge from the the world.
                And it is totally a user customizable,anytime the user can read,delete and modify it and others can read it only!!!
            </div>
        </div>
    )
}
export default About;