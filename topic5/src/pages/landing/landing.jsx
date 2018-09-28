import React from 'react';
import AddMovie from '../../components/addMovie/addMovie';
import MovieList from '../../components/movieList/movieList';

import './landing.scss';

const Landing = () => (
  <div className="Landing">
    <div className="Landing--content">
      <MovieList />
      <AddMovie />
    </div>
  </div>
);

export default Landing;
