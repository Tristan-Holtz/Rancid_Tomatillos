import React, { Component } from 'react';
import './MoviesContainer.css';
import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions';
import MovieCard from '../MovieCard/MovieCard';
import { getMovies } from '../../apiCalls';

export class MoviesContainer extends Component {
  constructor() {
    super();
    this.state = {
      sortValue: '',
      moviesArr: []
    }
  }

  componentDidMount() {
    getMovies()
      .then(movies => this.props.setMovies(movies))
      .catch(error => console.log(error))
  }

  handleSortInput = async (event) => {
    await this.setState({ sortValue: event.target.value })
    const sortedArray = this.sortArray(this.state.sortValue)
    this.setState({ moviesArr: [...this.state.moviesArr, sortedArray] })
  }

  sortArray = (value) => {
    const { movies } = this.props;
    if(value === 'high') {
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

  render() {
    const { movies } = this.props;
    if(this.state.moviesArr) {
      const movies = this.state.moviesArr
    }
    const card = movies.map(movie => {
      movie["numeric_date"] = Number(movie.release_date.split('-').join(''));
      return <MovieCard key={movie.id} movie={movie} />
    })
  return (
    <article className="movie-cards-section">
      <div className='movies-index'>
        <select className='sort-dropdown' onChange={ (e) => {this.handleSortInput(e)}}>
        <option>Sort movies by...</option>
        <option value='high'>Average Rating (Highest)</option>
        <option value='low'>Average Rating (Lowest)</option>
        <option value='new'>Release Date (Newest)</option>
        <option value='old'>Release Date (Oldest)</option>
        <option value='default'>Relevance</option>
       </select>
      </div>
      <article className="movie-cards-section">
        {card}
      </article>
    </>
  );
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
