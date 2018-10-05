import React, { Component } from 'react';
import UserPlaylists from '../UserPlaylists';
import LastPlayed from '../LastPlayed';

const Main = ({ sectionLoaded }) => {
  switch (sectionLoaded) {
    case 'playlist':
    return (<UserPlaylists />)

    case 'lastPlayed':
    return (<LastPlayed />)

    default:
    return (<div/>)
  }
}

export default Main;
