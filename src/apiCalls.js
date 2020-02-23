export const getUser = async (email, password) => {
  const url = 'https://rancid-tomatillos.herokuapp.com/api/v1/login';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error("Error! No 200 Status Code Found.")
  }
  const user = await res.json();
  return user
}

export const getMovies = async () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(response => response.json())
    .then(movies => movies.movies);
};

export const addUserRating = async (userID, movie_id, rating) => {
  const url = `https://rancid-tomatillos.herokuapp.com/api/v1/users/${userID}/ratings`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      movie_id,
      rating
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const res = await fetch(url, options)
  if (!res.ok) {
  throw new Error("Error! No 200 Status Code Found.")
  }
  const updatedRating = await res.json();
  return updatedRating;
}

export const getRatings = async (userID) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userID}/ratings`)
    .then(response => response.json())
    .then(data => data)
}

export const deleteRating = async (userID, movieID) => {
  console.log('in fetch', userID, movieID)
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userID}/ratings/${movieID}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))
}