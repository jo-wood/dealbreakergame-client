import React from 'react';
require('dotenv').config({ path: '../' })
//import { config } from 'dotenv';
//import { Link } from 'react-router-dom';


function Login() {

  // const oauth_url = 'https://api.instagram.com/oauth/authorize/?client_id=8471be6298f8410b90fd9ddb8b9243de&redirect_uri=http://localhost:3000/session&response_type=code';
  const oauth_url = process.env.REACT_APP_INSTAGRAM_AUTH;


  return (
    <div >
      <p>DEMO Instagram OAUTH</p>
      <p>--</p>
      <h2>Welcome to Real Time Dating Game Show</h2>
      <a href={oauth_url}>SIGN IN WITH INSTAGRAM</a>
    </div>
  );
}

export default Login;
