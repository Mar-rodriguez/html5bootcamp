import {
  ADD_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  CHANGE_EDIT_STATE,
} from '../actions/actions.jsx';

const moviesApp = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.movie),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((m, i) => action.index !== i),
      };
    case CHANGE_EDIT_STATE:
      return {
        ...state,
        movies: state.movies.map((m, i) => {
          if (action.index === i) {
            return {
              ...m,
              isEditing: action.isEditing,
            };
          }
          return m;
        }),
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(
          (m, i) => (action.index === i ? action.movie : m),
        ),
      };
    default:
      return state;
  }
};

export default moviesApp;
