import React, { Component } from 'react';
import './MoviesContainer.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setMovies, setRatings } from '../../actions/actions';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getMovies, addUserRating, getRatings, deleteRating } from '../../apiCalls';

class MoviesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    try {
      const movies = await getMovies();
      this.props.setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  }

  submitUserRating = async (event) => {
    const { user } = this.props;
    let userID = user.id;
    let movieRating = parseInt(event.target.value);
    let movieID = parseInt(event.target.id);
    await addUserRating(userID, movieID, movieRating)
    await this.getSetRatings()
  }

  getSetRatings = async () => {
    const { user } = this.props;
    const ratings = await getRatings(user.id);
    let userRatings = ratings.ratings;
    this.props.setRatings(userRatings)
  }

  checkIfRated = (movie) => {
    const { ratings } = this.props;
    console.log(ratings)
    let resultArr = ratings.find(rating => {
      return rating.movie_id === movie.id
    })
    if(resultArr) {
      return <div>
          <h3 className='rating-label'>Your rating: {resultArr.rating}</h3>
          <button id={resultArr.id} onClick={(e) => this.removeRating(e)}>Change rating</button>
        </div>
    } else {
      return <div className='user-rating'>
          <h3 className='rating-label'>Your rating:</h3>
          <select id={movie.id} className='rating-dropdown' onChange={ (e) => {this.submitUserRating(e)}}>
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

  removeRating = async (event) => {
    const { user } = this.props;
    let movieID = event.target.id;
    await deleteRating(user.id, movieID)
    await this.getSetRatings()
  }

  render() {
    const { movies, user } = this.props;
    const movieCards = movies.map(movie => {
      return (
        <article className="movie-card" key={movie.id}>
          <img className="movie-card-image" src={movie.poster_path} />
          <h1>{movie.title}</h1>
          <h3>Avg. rating: {movie.average_rating}</h3>
            {(user) && this.checkIfRated(movie)}
          <Link to={{
            pathname: `/movies/${movie.id}`,
            state: movie
          }}>See Movie</Link>
        </article>
      );
    });
    return <section className="movie-cards-section">{movieCards}</section>;
  }
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