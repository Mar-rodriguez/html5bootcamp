import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './app.scss';
import { setToken } from './actions/tokenActions';
import { fetchUser } from './actions/userActions';
import { setSection } from './actions/mainActions';
import Main from './components/Main';

class App extends Component {
  componentDidMount() {
	  let hashParams = {};
	  let e, r = /([^&;=]+)=?([^&;]*)/g,
	    q = window.location.hash.substring(1);
	  while ( e = r.exec(q)) {
	    hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    if(hashParams.access_token) {
      console.log('Token: ' + hashParams.access_token);
      this.props.setToken(hashParams.access_token);
    }
  }

  redirectToSpotify() {
    const client_id = 'af7ecae7626843beb287e2b3301014f0';
    const scope = 'playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state';

    window.location.href = 'https://accounts.spotify.com/authorize' + 
      '?client_id='+ client_id + 
      '&scope='+ scope +
      '&response_type=token&redirect_uri=http://localhost:8080';
  }
  
  componentWillReceiveProps(nextProps) {
	  if(nextProps.token) {
      this.props.fetchUser(nextProps.token);
	  };
  }
  
  render(){
    return (
      <div className="App">
        <Main />
        <button type="button" onClick={() => this.redirectToSpotify()}>Get Token</button>
        <button type="button" onClick={() => this.props.setSection('playlist')}>Get Playlists</button>
        <button type="button" onClick={() => this.props.setSection('lastPlayed')}>Last Played</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.tokenReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchUser,
    setToken,
    setSection,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
