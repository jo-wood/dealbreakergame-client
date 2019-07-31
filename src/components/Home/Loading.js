import React, {Component} from 'react';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom'

import UserContainer from './users';


// Get OAUTH Instagram code from url params
let params = (new URL(document.location)).searchParams;
let code = params.get('code');

const url = process.env.REACT_APP_SESSIONS_URL || 'https://dealbreakergame-server.herokuapp.com/sessions';
const data = {
  code: code,
  test: "test"
};


class Loading extends Component {

  render() {

    return (
      <div>
        <Subscribe to={[UserContainer]}>
          {userInfo => (
            <div>
              { console.log('CURRENT STATE: ', userInfo.state) }
              { console.log('test') }
              { userInfo.state.currentUser ? console.log('LOCAL-STORAGE: ', JSON.parse(localStorage.currentUser)) : null }
              { !userInfo.state.currentUser ? <div className="Main"><div className="lds-heart"><div></div></div><h2>Loading...</h2><div className="instagram"><span className="fa fa-instagram"></span> </div></div> : null }
              { userInfo.state.currentUser ? null : userInfo.fetchUser(url, data) }
              
              <p>{ userInfo.state.currentUser != null ? userInfo.state.currentUser.username : null }</p>
              <p>{ userInfo.state.currentUser != null ? userInfo.state.currentUser.full_name : null }</p>
              <div>{ userInfo.state.currentUser != null && userInfo.state.currentUser.returning_user === true ? 
              <Redirect to='/waiting' /> : null }</div>
              <div>{ userInfo.state.currentUser != null && userInfo.state.currentUser.returning_user === false ? 
              <Redirect to='/signup' /> : null }</div>
            </div>
          )}
        </Subscribe>
      </div>
    );
  
  }
}

export default Loading;
