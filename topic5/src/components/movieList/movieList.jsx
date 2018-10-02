import React from 'react';
import { connect } from 'react-redux';
import Movie from '../movie';
import './movieList.scss';

const MovieList = props => (
  <div id="movies-container">
    <table>
      <thead>
        <tr>
          <th className="col-year">YEAR</th>
          <th className="col-title">TITLE</th>
          <th className="col-actions" />
        </tr>
      </thead>
      <tbody>
        {props.movies.map((m, index) => (
          <Movie key={index} id={index} movie={m} />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MovieList);
