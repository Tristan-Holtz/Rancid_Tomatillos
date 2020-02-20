import React, { Component } from 'react';
import './Movies.css';
import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions';
import MovieDetails from '../MovieDetails/MovieDetails';

class Movies extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getMovies = async () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(movies => movies.movies);
  };

  async componentDidMount() {
    try {
      const movies = await this.getMovies();
      this.props.setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // for the time being, toggle the line of code below as active/inactive
    // to switch between different components rendering
    const { movies } = this.props;
    return <MovieDetails movies={movies} />;
    // const movieCards = movies.map(movie => {
    //   return (
    //     <article className="movie-card" key={movie.id}>
    //       <img className="movie-card-image" src={movie.poster_path} />
    //       <h1>{movie.title}</h1>
    //       <h3>Avg. rating: {movie.average_rating}</h3>
    //       {/* <p>{movie.release_date}</p> */}
    //       {/* <p>{movie.overview}</p> */}
    //     </article>
    //   );
    // });
    // return <section className="movie-cards-section">{movieCards}</section>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  setMovies: movies => {
    dispatch(setMovies(movies));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

// export default Movies;
