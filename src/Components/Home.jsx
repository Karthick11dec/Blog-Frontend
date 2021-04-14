import React from 'react';
import '../css/home.css';
import Navbar from "./Navbar";
import Data from "./Data";

const Home = () => {

    return (
        <>
            <Navbar />
            <div className="pt-5 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            {Data.slice(0,8).map((data, index) => (
                                <div key={index}>
                                    <a href={data.url} className="link" target="_blank" rel="noreferrer">
                                        <div className="card" data-toggle="tooltip" title="click to view all information about the post">
                                            <div className="card-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <img src={data.urlToImage} alt=".." style={{ width: "350px", height: "300px", textAlign: "center" }} className="p-3" />
                                                                </div>
                                                                <div className="col-12">
                                                                    <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>{data.title}</h6>
                                                                    <div style={{ color: 'blueviolet' }}>
                                                                        <b style={{ fontSize: "15px" }}>Date: </b>
                                                                        <span style={{ fontSize: "13px" }}>{data.publishedAt.split('T').join('  Time: ').replace("Z", "")}</span>
                                                                    </div>
                                                                    <div style={{ color: 'blueviolet' }}>
                                                                        <b style={{ fontSize: "15px" }}>Read me : </b>
                                                                        <span style={{ fontSize: "13px" }}>{Math.ceil((Math.random() * 7))}mins <i className="far fa-star" style={{ color: 'black' }}></i> </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="col-5">
                            {Data.map((data, index) => (
                                <div key={index}>
                                    <a href={data.url} className="link" target="_blank" rel="noreferrer">
                                        <div className="card" data-toggle="tooltip" title="click to view all information about the post" style={{ width: "40vw" }}>
                                            <div className="card-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>{data.title}</h6>
                                                            <div style={{ color: 'blueviolet' }}>
                                                                <b style={{ fontSize: "15px" }}>Date: </b>
                                                                <span style={{ fontSize: "13px" }}>{data.publishedAt.split('T').join('  Time: ').replace("Z", "")}</span>
                                                            </div>
                                                            <div style={{ color: 'blueviolet' }}>
                                                                <b style={{ fontSize: "15px" }}>Read me : </b>
                                                                <span style={{ fontSize: "13px" }}>{Math.ceil((Math.random() * 7))}mins  <i className="far fa-star" style={{ color: 'black' }}></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-3">
                                                            <img src={data.urlToImage} alt=".." style={{ width: "13vw", height: "15vh", textAlign: "center" }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="col-3 card pl-5 p-5">
                            <h2><b className="underline">Topics To Follow</b></h2>
                            <br></br>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-8">
                                                <h6 className="font" >Science</h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="button">Follow</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h6 className="font" >Politics</h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="button">Follow</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h6 className="font" >Machine Learning</h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="button">Follow</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h6 className="font" >Entertainment</h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="button">Follow</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <h6 className="font" >Astrology</h6>
                                            </div>
                                            <div className="col-4">
                                                <h6 className="button">Follow</h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <a href="." className="green">See more Topics</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    {Data.map((data, index) => (
                        <div key={index}>
                            <a href={data.url} className="link" target="_blank" rel="noreferrer">
                                <div className="card" data-toggle="tooltip" title="click to view all information about the post" style={{ width: "32vw" }}>
                                    <div className="card-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6">
                                                    <h6 style={{ fontSize: '15px' }}>{data.title}</h6>
                                                    <div style={{ color: 'blueviolet' }}>
                                                        <b style={{ fontSize: "15px" }}>Date: </b>
                                                        <span style={{ fontSize: "13px" }}>{data.publishedAt.split('T').join('  Time: ').replace("Z", "")}</span>
                                                    </div>
                                                    <div style={{ color: 'blueviolet' }}>
                                                        <b style={{ fontSize: "15px" }}>Read me : </b>
                                                        <span style={{ fontSize: "13px" }}>{Math.ceil((Math.random() * 7))}mins  <i className="far fa-star" style={{ color: 'black' }}></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-3">
                                                    <img src={data.urlToImage} alt=".." style={{ width: "13vw", height: "15vh", textAlign: "center" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Home;