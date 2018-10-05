export const trackReducer = (state = {}, action) => {

  switch (action.type) {

  case "FETCH_RECENTLY_PLAYED_SUCCESS":
    return {
      ...state,
      tracks: action.songs
    };

  default:
    return state;
  }

};

export default trackReducer;
