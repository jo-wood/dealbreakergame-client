import React from 'react';
require('dotenv').config({ path: '../../' })

function Home() {

  const oauth_url = process.env.REACT_APP_INSTAGRAM_AUTH;

  return (
    <div >
      <h2>(Home Page)</h2>
      <h2>Welcome to Real Time Dating Game Show</h2>
      <a href={oauth_url}>SIGN IN WITH INSTAGRAM</a>
    </div>
  );
}

export default Home;

