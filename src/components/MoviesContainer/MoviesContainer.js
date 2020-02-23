import React, { useEffect } from 'react';
import './MoviesContainer.css';

import { connect } from 'react-redux';
import { setMovies, setRatings } from '../../actions/actions';
import MovieCard from '../MovieCard/MovieCard';
import { getMovies } from '../../apiCalls';

export const MoviesContainer = ({ setMovies, movies }) => {

  useEffect(() => {
    getMovies()
      .then(movies => setMovies(movies))
      .catch(error => console.log(error))
    }, [])

  const card = movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie} />
  })
  return (
    <article className="movie-cards-section">
      {card}
    </article>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);