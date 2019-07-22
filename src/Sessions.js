import React from 'react';
//import axios from 'axios';

function Sessions() {
  
  // Get OAUTH Instagram code from url params
  let params = (new URL(document.location)).searchParams;
  let code = params.get('code');
  console.log(code);
  
  const url = 'http://localhost:5000/sessions';
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
    <div >
      <h1>Session (Waiting Room/Game Room)</h1>
    </div>
  );
}

export default Sessions;
