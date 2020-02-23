import React from 'react';
import './MovieDetails.scss';

import { connect } from 'react-redux';
import { setMovies, setRatings } from '../../actions/actions';
import { getMovies, addUserRating, getRatings, deleteRating } from '../../apiCalls';


export const MovieDetails = ({ location, user, ratings }) => {
  
  const removeRating = async (event) => {
    console.log('1121231231231312', user)
    let movieID = parseInt(event.target.id);
    console.log('999999', movieID)
    await deleteRating(user.id, movieID)
    await getSetRatings()
  }

  const checkIfRated = (ratings, movie) => {
    console.log('000000000', user)
    console.log(ratings)
    let resultArr = ratings.find(rating => {
      return rating.movie_id === movie.id
    })
    if(resultArr) {
      return <div>
          <h3 className='rating-label'>Your rating: {resultArr.rating}</h3>
          <button id={movie.id} onClick={(e) => removeRating(e)}>Change rating</button>
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

  console.log(location)
  const movie = location.state;  
  console.log('this is the user', user)
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



// an original copy of this component is below incase switching to a class based component messes things up.

// import React from 'react';
// import './MovieDetails.scss';

// const MovieDetails = ({ location }) => {
//   const movie = location.state;
//   return (
//     <section className="card-detail-section">
//       <div className="movie-main">
//         <img
//           className="movie-backdrop"
//           src={movie.backdrop_path}
//           alt={movie.title + ' backdrop'}
//         />
//         <div className="overview-container">
//           <label className="movie-overview">Overview</label>
//           <p className="movie-description">{movie.overview}</p>
//         </div>
//       </div>
//       <article className="movie-stats-container">
//         <img
//           className="movie-poster"
//           src={movie.poster_path}
//           alt={movie.title + ' poster'}
//         />
//         <div className="movie-stats">
//           <h1 className="movie-title">{movie.title}</h1>
//           <p className="movie-date">Release Date {movie.release_date}</p>
//           <h3 className="movie-rating">
//             Average Rating {movie.average_rating}
//           </h3>
//         </div>
//       </article>
//     </section>
//   );
// };

// export default MovieDetails;