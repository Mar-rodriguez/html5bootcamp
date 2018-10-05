import React, { Component } from 'react';

class LastPlayed extends Component {
  componentDidMount() {
    if(this.props.token !== '') {
      this.props.fetchRecentlyPlayed(this.props.token);
    }
  }

  renderList() {
    return this.props.tracksList.map(item => {
      return (
        <li key={ item.track.id }>{ item.track.name }</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Last Played</h3>
        {this.props.tracksList && this.renderList()}
      </div>
    );
  }
}

export default LastPlayed;
