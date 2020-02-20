export const getData = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => response.json())
    .then(movies => ({
      type: 'GET_MOVIES',
      movies: movies.movies
    }))
    .catch(error => console.log(error));
};
