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
      <tr>
        <td>
          <input
            type="text"
            defaultValue={movie.year}
            ref={node => (inputYear = node)}
          />
        </td>
        <td>
          <input
            type="text"
            defaultValue={movie.title}
            ref={node => (inputTitle = node)}
          />
        </td>
        <td>
          <span id="butt">
            <button
              type="button"
              onClick={() => dispatch(editMovie(id, saveEdit()))}
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => dispatch(changeEditState(id, false))}
            >
              Close
            </button>
          </span>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{movie.year}</td>
      <td>{movie.title}</td>
      <td>
        <button
          type="button"
          onClick={() => dispatch(changeEditState(id, true))}
        >
          Edit
        </button>
        <button type="button" onClick={() => dispatch(deleteMovie(id))}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default connect()(Movie);
