import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie, editMovie, changeEditState } from '../../actions/actions';

const Movie = ({ dispatch, movie, id }) => {
  let inputTitle;
  let inputYear;

  const saveEdit = () => ({
    title: inputTitle.value,
    year: inputYear.value,
    isEditing: false,
  });

  if (movie.isEditing) {
    return (
      <li>
        <span>
          <input
            type="text"
            defaultValue={movie.title}
            ref={node => (inputTitle = node)}
          />{' '}
          -
          <input
            type="text"
            defaultValue={movie.year}
            ref={node => (inputYear = node)}
          />
        </span>
        <button onClick={() => dispatch(editMovie(id, saveEdit()))}>Save</button>
        <button onClick={() => dispatch(changeEditState(id, false))}>Close</button>
      </li>
    );
  }
  return (
    <li>
      <span>
        {movie.title} - {movie.year}
      </span>
      <button onClick={() => dispatch(changeEditState(id, true))}>Edit</button>
      <button onClick={() => dispatch(deleteMovie(id))}>Delete</button>
    </li>
  );
};

export default connect()(Movie);
