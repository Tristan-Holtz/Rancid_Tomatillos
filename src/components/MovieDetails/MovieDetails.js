import React from 'react';
import './MovieDetails.scss';
import { trailers } from '../../trailers';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setMovies, setRatings } from '../../actions/actions';
import { addUserRating, getRatings, deleteRating } from '../../apiCalls';


export const MovieDetails = ({ location, user, ratings, setRatings }) => {

  const removeRating = async (event) => {
    let ratingID = event.target.id;
    await deleteRating(user.id, ratingID)
    await getSetRatings()
  }

  const checkIfRated = (ratings, movie) => {
    let movieRating = ratings.find(rating => {
      return rating.movie_id === movie.id
    })
    if(movieRating) {
      return <div>
          <h3 className='rating-label'>Your rating: {movieRating.rating}</h3>
          <button id={movieRating.id} onClick={(e) => removeRating(e)}>Change rating</button>
        </div>
    } else {
      return <div className='user-rating'>
          <h3 className='rating-label'>Your rating:</h3>
          <select id={movie.id} className='rating-dropdown' onChange={ (e) => {submitUserRating(e)}}>
            <option>--Add your rating!--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
    }
  }

  const submitUserRating = async (event) => {
    let userID = user.id;
    let movieRating = parseInt(event.target.value);
    let movieID = parseInt(event.target.id);
    await addUserRating(userID, movieID, movieRating)
    await getSetRatings()
  }

  const getSetRatings = async () => {
    const ratings = await getRatings(user.id);
    let userRatings = ratings.ratings;
    setRatings(userRatings)
  }

  const movie = location.state;
  const movieTrailer = trailers.find(trailer => trailer.trailerID === movie.id);
  return (
    <section className="card-detail-section">
      <Link to= '/'>Go back</Link>
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
          {(user) && checkIfRated(ratings, movie, user)}
        </div>
      </article>
    </section>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
  ratings: state.ratings
});

const mapDispatchToProps = dispatch => ({
  setMovies: movies => {
    dispatch(setMovies(movies));
  },
  setRatings: ratings => {
    dispatch(setRatings(ratings))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
