import React from 'react';
import {Helmet} from "react-helmet";
require('dotenv').config({ path: '../../' })

function Home() {

  const oauth_url = process.env.REACT_APP_INSTAGRAM_AUTH;

  return (
    <div >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <meta name="description" content="Dealbreaker Login Page, users must be logged in to play the live dating game" />
      </Helmet>

      <h2 className="title"><strong>Welcome to Real Time</strong> <br></br> Dating Game Show</h2>
      <a href={oauth_url} className="loginButton" ><strong>SIGN IN</strong> WITH INSTAGRAM</a>
      {/* <form method="get" action="http://localhost:5000/sessions">
        <button type="submit">SIGN IN</button>
      </form> */}

    </div>
  );
}

export default Home;

