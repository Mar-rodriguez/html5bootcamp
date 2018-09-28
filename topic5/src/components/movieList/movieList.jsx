import React from 'react';
import { connect } from 'react-redux';
import Movie from '../movie';

const MovieList = props => (
  <div>
    <ul>
      {props.movies.map((m, index) => (
        <Movie key={index} id={index} movie={m} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(MovieList);
