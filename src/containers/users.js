import { Container } from 'unstated';

class UserContainer extends Container {
  state = {
    username: 'ted',
    full_name: 'tedjames',
    profile_picture: 'hello'
  }
  addUser = (instaResponse) => {
    this.setState({ 
      username: instaResponse.username,
      full_name: instaResponse.full_name,
      profile_picture: instaResponse.profile_picture
    })
  }
  removeUser = () => {
    this.setState({ 
      username: null,
      full_name: null,
      profile_picture: null
    })
  }
}
export default UserContainer