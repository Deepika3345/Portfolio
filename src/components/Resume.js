import React, { Fragment } from 'react'


import { SiFacebook, SiInstagram } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">DEEPIKA PATIDAR</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            {/* <li>
                                <h4 className="ff-jose my-1 text-red">Trainee Software Engineer</h4>
                                <h6 className="blue-label px-2 py-1">Jul 2021 - Apr 2022</h6>
                                <p className="m-0">TatvaSoft · Full-time</p>
                                <p>Ahmedabad, Gujarat, India</p>
                            </li> */}
                            <li>
                                <h4 className="ff-jose my-1 text-red">Internship</h4>
                                <h6 className="blue-label px-2 py-1">July 2023 - Feb 2024</h6>
                                <p className="m-0">Eskills Web · Internship</p>
                                <p>Indore , India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Masters of Computer Application(MCA)</h4>
                                <h6 className="blue-label px-2 py-1">2022 - present</h6>
                                <p className="m-0">RGPV University , BHOPAL</p>
                                {/* <p>CGPA: 8.05</p> */}
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Bachelor of Arts</h4>
                                <h6 className="blue-label px-2 py-1">2019 - 2022</h6>
                                <p className="m-0">DAVV University , INDORE</p>
                                <p>Grade: 74.91 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.instagram.com/deepika_25_08/?next=%2Fp%2FC1hVesnJ2BF%2F" target="/blank" className="text-white text-decoration-none mx-2">
                                < SiInstagram className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.facebook.com/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiFacebook className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume