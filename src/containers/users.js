import { Container } from 'unstated';

class UserContainer extends Container {
  state = {
    username: null,
    full_name: null,
    profile_picture: null
  };

  addUser (instaResponse) {
    this.setState({ 
      username: instaResponse.username,
      full_name: instaResponse.full_name,
      profile_picture: instaResponse.profile_picture
    })
  }

  removeUser () {
    this.setState({ 
      username: null,
      full_name: null,
      profile_picture: null
    })
  }

  fetchUser (url, data) {
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(JSON.parse) //whyyy??? 
    .then((data) => {
      this.setState({
        username: data.username,
        full_name: data.full_name,
        profile_picture: data.profile_picture
      })
    });
  }
}
export default UserContainer