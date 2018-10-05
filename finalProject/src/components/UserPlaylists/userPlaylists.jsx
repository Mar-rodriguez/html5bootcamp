import React, { Component } from 'react';

class UserPlaylists extends Component {
  componentDidMount() {
    if(this.props.userId !== '' && this.props.token !== '') {
      this.props.fetchPlaylistsMenu(this.props.userId, this.props.token);
    }
  }

  renderPlaylists() {
    return this.props.playlistMenu.map(playlist => {
      return (
        <li key={ playlist.id }>{ playlist.name }</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Playlists</h3>
        {this.props.playlistMenu && this.renderPlaylists()}
      </div>
    );
  }
}

export default UserPlaylists;
