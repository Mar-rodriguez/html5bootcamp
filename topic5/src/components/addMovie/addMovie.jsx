import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovie } from '../../actions/actions';
import './addMovie.scss';

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
        }}
      >
        <div id="add-container">
          <table>
            <tbody>
              <tr>
                <td className="col-year">
                  <input ref={node => (inputYear = node)} placeholder="Year" />
                </td>
                <td className="col-title">
                  <input ref={node => (inputTitle = node)} placeholder="Title" />
                </td>
                <td className="col-actions">
                  <button type="submit">ADD MOVIE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

AddMovie.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddMovie);
