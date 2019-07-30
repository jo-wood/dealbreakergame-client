import React from 'react';
import {Helmet} from "react-helmet";
require('dotenv').config({ path: '../../' })

function Home() {

  const oauth_url = process.env.REACT_APP_INSTAGRAM_AUTH;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name="description" content="Dealbreaker Login Page, users must be logged in to play the live dating game" />
      </Helmet>
      <div className="Main">
        <div className="welcome">
          <h2>
            <span className="bold">
            Welcome <br /></span> 
            to the <br />
            <span className="bold">
            Real Time <br /></span>
            <span>Dating Game Show</span>
          </h2>
        </div>
        <div className="signin-box">        
          <a href={oauth_url}>
            <span className="bold">SIGN IN <br/></span> WITH  <br/>
          </a>          
          <div className="instagram">  
            <span className="fa fa-instagram"></span>       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;