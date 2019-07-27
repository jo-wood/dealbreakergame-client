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
      <h2>(Home Page)</h2>
      <h2>Welcome to Real Time Dating Game Show</h2>
      <a href={oauth_url}>SIGN IN WITH INSTAGRAM</a>
      {/* <form method="get" action="http://localhost:5000/sessions">
        <button type="submit">SIGN IN</button>
      </form> */}

    </div>
  );
}

export default Home;

