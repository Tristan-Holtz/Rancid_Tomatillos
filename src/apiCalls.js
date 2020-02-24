const homeURL = 'https://rancid-tomatillos.herokuapp.com/api/v1/'

export const getUser = async (email, password) => {
  const url = homeURL + 'login';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Error! No 200 Status Code.');
  }
  const user = await res.json();
  return user;
};

export const getMovies = async () => {
  const url = homeURL + 'movies';
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Error! No 200 Status Code.');
  }
  const movies = await res.json();
  return movies;
};

export const addUserRating = async (userID, movie_id, rating) => {
  const url = homeURL + `users/${userID}/ratings`
  const options = {
    method: 'POST',
    body: JSON.stringify({
      movie_id,
      rating
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error('Error! No 200 Status Code.');
  }
  const updatedRating = await res.json();
  return updatedRating;
};

export const getRatings = async userID => {
  const url = homeURL + `users/${userID}/ratings`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Error! No 200 Status Code.');
  }
  const ratings = await res.json();
  return ratings;
}

export const deleteRating = async (userID, ratingID) => {
  const url = homeURL + `users/${userID}/ratings/${ratingID}`;
  const res = await fetch(url, { method: 'DELETE' } )
  if (!res.ok) {
    throw new Error('Error! No 200 Status Code.');
  }
  const deletion = await res.json();
  return deletion;
}
