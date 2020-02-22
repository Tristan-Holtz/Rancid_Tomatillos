import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ location }) => {
  const movie = location.state;
  return (
    <section className="card-detail-section">
      <img src={movie.backdrop_path} alt={movie.title + ' backdrop'} />
      <img src={movie.poster_path} alt={movie.title + ' poster'} />
      <h1>{movie.title}</h1>
      <p>{movie.release_date}</p>
      <h3>{movie.average_rating}</h3>
      <p>{movie.overview}</p>
    </section>
  );
};

export default MovieDetails;
