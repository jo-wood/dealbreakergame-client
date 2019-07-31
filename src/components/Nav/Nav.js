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
    const { profileImage, user_id } = this.state;
    if (profileImage) {
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

  _handleUserInfo = () => {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserString);
    const profileImage = currentUser.profile_picture;
    const user_id = currentUser.user_id;
    this.setState({ profileImage, user_id});
  }

  componentDidMount() {
    // const currentUserString = localStorage.getItem('currentUser');
    // const currentUser = JSON.parse(currentUserString);
    // const profileImage = currentUser.profile_picture;
    // const user_id = currentUser.user_id;
    // this.setState({ profileImage, user_id});

  }

  render() {
    //console.log('Does exist: ', localStorage.getItem('currentUser'));
    const navLink = this.renderNav();
    //console.log(this.props);
    return (
      <nav>
        <a href="/" className="logo">
          <h1>Deal<strong>Breaker</strong></h1>
        </a>
        <ul className="nav-links">
          {localStorage.getItem('currentUser') !== null && this.state.user_id === null ? this._handleUserInfo() : null}
          {navLink}
        </ul>
      </nav>
    );
  }

}

export default Nav;
