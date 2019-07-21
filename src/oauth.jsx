import React, {Component} from 'react';

class Auth extends Component {
  state = {
    profile_image: [],
  };
  
  
  
  render() {
    
    const oauth_url = 'https://api.instagram.com/oauth/authorize/?client_id=8471be6298f8410b90fd9ddb8b9243de&redirect_uri=http://localhost:3000&response_type=token';

    fetch('https://api.instagram.com/oauth/authorize/?client_id=8471be6298f8410b90fd9ddb8b9243de&redirect_uri=http://localhost:3000&response_type=token')
    .then( (response) => {
      console.log(response.data)
    })
       
    return (
          <div >
            <p>DEMO OAUTH</p>
            <form action={oauth_url} method="get" target="_blank">
              <button type="submit">Sign-In with Instagram</button>
            </form>
          </div>            
    );

  }

}

export default Auth;