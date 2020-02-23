import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';


import { connect } from 'react-redux';
import { setMovies, setRatings } from '../../actions/actions';
import { addUserRating, getRatings, deleteRating } from '../../apiCalls';


export const MovieCard = ({ movie, setRatings, user, ratings }) => {

  const submitUserRating = async (event) => {
    let userID = user.id;
    let movieRating = parseInt(event.target.value);
    let movieID = parseInt(event.target.id);
    await addUserRating(userID, movieID, movieRating)
    getSetRatings()
  }

  const getSetRatings = async () => {
    const ratings = await getRatings(user.id);
    let userRatings = ratings.ratings;
    setRatings(userRatings)
  }

  const checkIfRated = (movie) => {
    let resultArr = ratings.find(rating => {
      return rating.movie_id === movie.id
    })
    if(resultArr) {
      return <div>
          <h3 className='rating-label'>Your rating: {resultArr.rating}</h3>
          <button id={resultArr.id} onClick={(e) => removeRating(e)}>Change rating</button>
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

  const removeRating = async (event) => {
    let movieID = event.target.id;
    await deleteRating(user.id, movieID)
    await getSetRatings()
  }

  return (
    <article className="movie-card" key={movie.id}>
      <img className="movie-card-image" src={movie.poster_path} />
      <h1>{movie.title}</h1>
      <h3>Avg. rating: {movie.average_rating}</h3>
        {(user) && checkIfRated(movie)}
      <Link to={{
        pathname: `/movies/${movie.id}`,
        state: movie
      }}>See Movie</Link>
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
  },
  setRatings: ratings => {
    dispatch(setRatings(ratings))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);