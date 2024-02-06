import React, { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 

            <div className="container">

              <div className="row">

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                  <div>
                    <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                    <h1 className="m-0 font-big animate-charcter">I'm Deepika,</h1>
                    <p className="ls-2 mt-2 slide-in-bottom">Full Stack Developer</p>
                    <p>
                  Skilled full stack developer adept 
                  at creating seamless web solutions with expertise
                  in front-end and back-end technologies. 
                  Passionate about delivering intuitive user
                   experiences and efficient, scalable code.</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img className="img-fluid" src="../images/nomad-bro.png" alt="..."></img>
                </div>

              </div>

            </div>
            
        </div>
    </Fragment>
  )
}

export default Home