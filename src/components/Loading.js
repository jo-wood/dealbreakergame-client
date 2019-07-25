import React, {Component} from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom'

import UserContainer from '../containers/users';


// Get OAUTH Instagram code from url params
let params = (new URL(document.location)).searchParams;
let code = params.get('code');
console.log(code);

const url = process.env.REACT_APP_SESSIONS_URL || 'https://dealbreakergame-server.herokuapp.com/sessions';
const data = {
  code: code,
  test: "test"
 };


class Loading extends Component {

  render() {

    return (
      <div>
        <h1>DEALBREAKER</h1>
        <p>---</p>
        <Subscribe to={[UserContainer]}>
          {userInfo => (
            <div>
              { console.log('CURRENT STATE: ', userInfo.state) }
              { console.log('test') }
              { userInfo.state.currentUser ? console.log('LOCAL-STORAGE: ', JSON.parse(localStorage.currentUser)) : null }
              { !userInfo.state.currentUser ? <h2>Loading...</h2> : null }
              { userInfo.state.currentUser ? null : userInfo.fetchUser(url, data) }
              
              <p>{ userInfo.state.currentUser != null ? userInfo.state.currentUser.username : null }</p>
              <p>{ userInfo.state.currentUser != null ? userInfo.state.currentUser.full_name : null }</p>
              <img src={ userInfo.state.currentUser != null ? userInfo.state.currentUser.profile_picture : null }/>
              
              <div>{ userInfo.state.currentUser != null && userInfo.state.currentUser.returning_user === true ? 
              <Redirect to='/waiting' /> : null }</div>
            </div>
          )}
        </Subscribe>      
      </div>
    );
  
  }
}

export default Loading;
