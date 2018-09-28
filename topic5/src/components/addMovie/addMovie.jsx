import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovie } from '../../actions/actions';

const AddMovie = ({ dispatch }) => {
  let inputTitle;
  let inputYear;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!inputTitle.value.trim()) {
            return;
          }
          if (!inputYear.value.trim()) {
            return;
          }
          dispatch(
            addMovie({
              title: inputTitle.value,
              year: inputYear.value,
              isEditing: false,
            }),
          );
          inputTitle.value = '';
          inputYear.value = '';
        }}>
        <input ref={node => (inputTitle = node)} placeholder="Title" />
        <input ref={node => (inputYear = node)} placeholder="Year" />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

AddMovie.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddMovie);
