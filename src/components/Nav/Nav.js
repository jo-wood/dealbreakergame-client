import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      user_id: null, 
      profileImage: null
    }
  }
  renderNav() {
    let { profileImage, user_id } = this.state;
    if (profileImage) {
      if (!user_id) {
        user_id = 0;
      }
      return (
        <div className="circle">
          <img src={profileImage} key={user_id} alt="user_img" />
        </div>
      );
    } else {
      return (
        <Link to="/login">
          <li>Login</li>
        </Link>    
      );
    }
  }
  componentDidMount() {
    if (localStorage.getItem('currentUser')) {
      const currentUserString = localStorage.getItem('currentUser');
      const currentUser = JSON.parse(currentUserString);
      const profileImage = currentUser.profile_picture;
      const user_id = currentUser.user_id;
      this.setState({ profileImage, user_id});      
    } 
  }
  render() {
    const navLink = this.renderNav();
    return (
      <nav className="gameNav">
        <a href="/" className="logo">
          <h1>Deal<strong>Breaker</strong></h1>
        </a>
        <ul className="nav-links">
          {navLink}
        </ul>
      </nav>
    );
  }
}
export default Nav;