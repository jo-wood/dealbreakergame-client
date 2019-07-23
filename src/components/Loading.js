import React from 'react';

function Loading() {

  // Get OAUTH Instagram code from url params
  let params = (new URL(document.location)).searchParams;
  let code = params.get('code');
  console.log(code);
  
  const url = process.env.REACT_APP_SESSIONS_URL || 'https://dealbreakergame-server.herokuapp.com/sessions';
  const data = {
    code: code,
    test: "test"
   };

  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: { "Content-Type": "application/json" },
    mode: 'cors',
    body: JSON.stringify(data), // data can be `string` or {object}!
  }).then(res => res.json()
  ).then( (data) => {
    console.log(data);
  });

  return (
    <div>
      <h1>DEALBREAKER</h1>
      <p>loading...</p>
    </div>
  );
}

export default Loading;
