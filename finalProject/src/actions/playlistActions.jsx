export const fetchPlaylistMenuSuccess = (playlists) => {
  return {
    type: 'FETCH_PLAYLIST_MENU_SUCCESS',
    playlists
  };
};

export const fetchPlaylistsMenu = (userId, accessToken) => {
  console.log('fetchPlaylistsMenu');

  return dispatch => { 
    const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
      }
    );

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        console.log("Unauthorized");
      }
      return res.json();
    }).then(res => {
      dispatch(fetchPlaylistMenuSuccess(res.items));
    }).catch(err => {
      console.log(err);
    });
  };
};
