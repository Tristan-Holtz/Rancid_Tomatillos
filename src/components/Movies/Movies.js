import React, { Component } from 'react';
import './Movies.css';
import MovieDetails from '../MovieDetails/MovieDetails'

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  getData = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(movies => this.setState({ movies: movies.movies }))
      .catch(error => console.log(error));
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    // for the time being, toggle the line of code below as active/inactive
    // to switch between different components rendering
    const { movies } = this.state;
    return <MovieDetails movies={movies}/>
    const movieCards = movies.map(movie => {
      return (
        <article className='movie-card' key={movie.id}>
          <img className='movie-card-image' src={movie.poster_path}/>
          <h1>{movie.title}</h1>
          <h3>Avg. rating: {movie.average_rating}</h3>
          {/* <p>{movie.release_date}</p> */}
          {/* <p>{movie.overview}</p> */}
        </article>
      );
    });
    return <section className='movie-cards-section'>{movieCards}</section>;
  }
}

export default Movies;
