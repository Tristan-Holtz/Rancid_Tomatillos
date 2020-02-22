import React from 'react';
import './MovieDetails.scss';

const MovieDetails = ({ location }) => {
  const movie = location.state;
  return (
    <section className="card-detail-section">
      <div className="movie-main">
        <img
          className="movie-backdrop"
          src={movie.backdrop_path}
          alt={movie.title + ' backdrop'}
        />
        <div className="overview-container">
          <label className="movie-overview">Overview</label>
          <p className="movie-description">{movie.overview}</p>
        </div>
      </div>
      <article className="movie-stats-container">
        <img
          className="movie-poster"
          src={movie.poster_path}
          alt={movie.title + ' poster'}
        />
        <div className="movie-stats">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-date">Release Date {movie.release_date}</p>
          <h3 className="movie-rating">
            Average Rating {movie.average_rating}
          </h3>
        </div>
      </article>
    </section>
  );
};

export default MovieDetails;
