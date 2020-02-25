import React, { useEffect } from 'react';
import './MoviesContainer.css';

import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions';
import MovieCard from '../MovieCard/MovieCard';
import { getMovies } from '../../apiCalls';

export const MoviesContainer = ({ setMovies, movies }) => {
  useEffect(() => {
    getMovies()
      .then(movies => setMovies(movies))
      .catch(error => console.log(error));
  }, []);

  const card = movies.map(movie => {
    movie['numeric_date'] = Number(movie.release_date.split('-').join(''));
    return <MovieCard key={movie.id} movie={movie} />;
  });

  const handleSortInput = event => {
    let eventValue = event.target.value;
    let sortedArray = sortArray(eventValue);
    setMovies(sortedArray);
    // movies array is updated within store, but yet the DOM is not re-rendering based off the new order of the movies in the store
  };

  const sortArray = value => {
    if (value === 'high') {
      return movies.sort((a, b) => {
        return b.average_rating - a.average_rating;
      });
    }
    if (value === 'low') {
      return movies.sort((a, b) => {
        return a.average_rating - b.average_rating;
      });
    }
    if (value === 'old') {
      return movies.sort((a, b) => {
        return a.numeric_date - b.numeric_date;
      });
    }
    if (value === 'new') {
      return movies.sort((a, b) => {
        return b.numeric_date - a.numeric_date;
      });
    } else {
      return movies.sort((a, b) => {
        return a.id - b.id;
      });
    }
  };

  return (
    <article className="movie-cards-section">
      <div>
        <select
          className="sort-dropdown"
          onChange={e => {
            handleSortInput(e);
          }}
        >
          <option>Sort movies by...</option>
          <option value="high">Average Rating (Highest)</option>
          <option value="low">Average Rating (Lowest)</option>
          <option value="new">Release Date (Newest)</option>
          <option value="old">Release Date (Oldest)</option>
          <option value="relevance">Relevance</option>
        </select>
      </div>
      {card}
    </article>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
