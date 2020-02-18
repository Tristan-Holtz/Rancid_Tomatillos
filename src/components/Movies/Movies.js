import React, { Component } from 'react';

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
    const { movies } = this.state;
    const movieCards = movies.map(movie => {
      return (
        <article key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
        </article>
      );
    });
    return <section>{movieCards}</section>;
  }
}

export default Movies;
