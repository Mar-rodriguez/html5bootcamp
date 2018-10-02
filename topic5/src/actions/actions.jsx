export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const CHANGE_EDIT_STATE = 'CHANGE_EDIT_STATE';

const addMovie = movie => ({
  type: ADD_MOVIE,
  movie,
});

const changeEditState = (index, isEditing) => ({
  type: CHANGE_EDIT_STATE,
  index,
  isEditing,
});

const editMovie = (index, movie) => ({
  type: EDIT_MOVIE,
  index,
  movie,
});

const deleteMovie = index => ({
  type: DELETE_MOVIE,
  index,
});

export { addMovie, deleteMovie, editMovie, changeEditState };
