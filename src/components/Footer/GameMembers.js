import React, { Component } from 'react';
import SingleContestent from '../../UtilComponents/SingleContestent'
require('dotenv').config({ path: '../../' })

class GameMembers extends Component {
  constructor() {
    super();
    this.state = {
      users_online: ["jake", "alex", "don", "lisa", "emily", "ashley"],
    }
  }

  renderMemberInformation(users_online) {
    return users_online.map(user => {
      return (
        <div>
          <SingleContestent key={user.id} user={user} />
        </div>
      )
    });
  }

  render() {
    const { users_online } = this.state;
    const members = users_online ? (this.renderMemberInformation(users_online)) : (<h3>Loading Members Online ...</h3>)
    return (
      <div>
        {members}
      </div>
    );
  }
}

export default GameMembers;