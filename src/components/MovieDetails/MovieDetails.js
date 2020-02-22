import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movies }) => {
  return (
    <section className="card-detail-section">
      <h1>MOVIE TITLE</h1>
      <h3>MOVIE AVERAGE RATING</h3>
      <p>MOVIE OVERVIEW</p>
    </section>
  );
};

export default MovieDetails;
