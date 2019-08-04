import React, { Component } from 'react';
import SingleContestent from '../../UtilComponents/SingleContestent'
require('dotenv').config({ path: '../../' })

class GameMembers extends Component {
  renderMemberInformation(userPool) {
    const users = Object.values(userPool)
    return users.map(user => {
      const percent =  user.match;
      const profile =  user.img;
        return (
          <div className="frame-round">
              <SingleContestent match={percent} key={user} img={profile} />
          </div>
      )})
  }
  render() {
    const members = this.renderMemberInformation(this.props.userPool)
    return (
      <div>
        {members}
      </div>
    );
  }
}
export default GameMembers;