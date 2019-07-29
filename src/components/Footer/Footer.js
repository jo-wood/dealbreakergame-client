import React, { Component } from 'react';
import GameMembers from './GameMembers';
// import Privacy from './GameMembers';

class Footer extends Component {

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
      (<div><footer className="togglePool">{ renderFooter }</footer></div>) :
        (<div><footer>{ renderFooter }</footer></div>)

    return (
      <div>
        {toggleFooter}
      </div>

    );
  }

}

export default Footer;
