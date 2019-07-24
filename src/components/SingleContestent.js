import React, { Component } from 'react';

class SingleContestent extends Component {
  render() {
    const { user } = this.props;
    return (
      <div class="chatPrompt">
          <a href="#">{user}</a>
      </div>
    );
  }

}

export default SingleContestent;