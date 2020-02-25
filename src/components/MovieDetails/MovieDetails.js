import React from 'react';
import './MovieDetails.scss';
import { trailers } from '../../trailers';

import { Link } from 'react-router-dom';

export const MovieDetails = ({ location }) => {
  const movie = location.state;
  const movieTrailer = trailers.find(trailer => trailer.trailerID === movie.id);
  return (
    <section className="card-detail-section">
      <Link to="/">Go back</Link>
      <div className="movie-main">
        <img
          className="movie-backdrop"
          src={movie.backdrop_path}
          alt={movie.title + ' backdrop'}
        />
        <div className="overview-container">
          <label className="movie-overview">Overview</label>
          <p className="movie-description">{movie.overview}</p>
          <iframe
            title={movie.title + ' trailer'}
            width="500"
            height="300"
            src={movieTrailer.src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
