import { Container } from 'unstated';
import Cookies from 'universal-cookie';

class UserContainer extends Container {
  state = {
    currentUser: null
  };


  setNewCookie = (userId) => {
    const cookies = new Cookies();
    cookies.set('user_id', userId, { path: '/' });
  }

  fetchUser = (url, data) => {
    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(JSON.parse) //whyyy??? 
    .then((data) => {
      const currentUser = {
        user_id: data.user_id,
        instagram_id: data.instagram_id,
        username: data.username,
        full_name: data.full_name,
        access_token: data.access_token,
        profile_picture: data.profile_picture,
        profile_picture_hd: data.profile_picture_hd,
        returning_user: data.returning_user,
        logged_in: data.logged_in
      }
      this.setState({
        currentUser: currentUser
      })
      if (data.user_id != null) {
        this.setNewCookie(data.user_id);
      }
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    });
  }
}
export default UserContainer