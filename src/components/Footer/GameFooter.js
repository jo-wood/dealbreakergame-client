import React, { Component } from 'react';
import GameMembers from './GameMembers';

class GameFooter extends Component {
  renderUserPool({ toggle, userPool }) {
    if (toggle) {
      return (
        <div className="userPool">
          <GameMembers userPool={userPool} />
        </div>
      )
    }
  }
  render() {
    const renderFooter = this.renderUserPool(this.props);
    const toggleFooter = (this.props.toggle) ? 
      (<div className="togglePool">{ renderFooter }</div>) :
        (<div className="gameFooter">{ renderFooter }</div>)
    return (
      <div>
        {toggleFooter}
      </div>
    );
  }
}
export default GameFooter;