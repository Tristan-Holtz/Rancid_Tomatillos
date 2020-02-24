import { getUser, getMovies, addUserRating, getRatings, deleteRating } from './apiCalls.js';
const url = 'https://rancid-tomatillos.herokuapp.com/api/v1/'

// getUser
describe('getUser', () => {
  const email = 'alan@turing.io';
  const password = 'abc123';

  const mockUser = {
    email,
    password
  }

  const mockResponse = {
    id: 1,
    name: 'Alan',
    email
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(mockUser),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser)
      })
    });
  });

  it('should call fetch with the correct url', () => {
    getUser(email, password);
    expect(window.fetch).toHaveBeenCalledWith(url + 'login', options);
  });

  it('should return a resolved promise when response is ok', () => {
    expect(getUser(email, password)).resolves.toEqual(mockUser);
  });

  it('should return error if the resolved promise response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockUserRating)
      })
    })

    expect(getUser(email, password)).rejects.toEqual(Error('Error! No 200 Status Code.'));
  });
});

// getMovies
describe('getMovies', () => {
  const mockMovies = {
    movies: [
      {
        id: 1,
        title: 'Movie Title',
        poster_path: 'someURL',
        backdrop_path: 'someURL',
        release_date: '2019-12-04',
        overview: 'Some overview',
        average_rating: 6
      }
    ]
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockMovies)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getMovies();

    expect(window.fetch).toHaveBeenCalledWith(url + 'movies');
  });

  it('should return a resolved promise when response is ok', () => {
    let movies = getMovies();
    expect(movies).resolves.toEqual(mockMovies);
  });

  it('should return error if the resolved promise response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockMovies)
      });
    });
    expect(getMovies()).rejects.toEqual(Error('Error! No 200 Status Code.'));
    expect(getMovies()).rejects.toThrow(Error('Error! No 200 Status Code.'));
  });

  it('should return error if the resolved promise response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error! No 200 Status Code.'));
    });
    expect(getMovies()).rejects.toEqual(Error('Error! No 200 Status Code.'));
  });
});

// addUserRating
describe('addUserRating', () => {
  const rating = 5;
  const movie_id = 19;
  const userID = 2;

  const mockUserRating = {
  movie_id,
  rating
  }

  const mockResponse = {
    rating: {
      user_id: userID,
      movie_id,
      rating
    }
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(mockUserRating),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserRating)
      })
    });
  });

  it('should call fetch with the correct url', () => {
    addUserRating(userID, movie_id, rating);
    expect(window.fetch).toHaveBeenCalledWith(url + 'users/2/ratings', options);
  });

  it('should return a resolved promise when response is ok', () => {
    expect(addUserRating(userID, movie_id, rating)).resolves.toEqual(mockUserRating);
  });

  it('should return error if the resolved promise response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockUserRating)
      })
    })

    expect(addUserRating(userID, movie_id, rating)).rejects.toEqual(Error('Error! No 200 Status Code.'));
  });
});

// getRatings
describe('getRatings', () => {
  const userID = 1;
  const ratingID = 6;
  const mockRatings = {
    "ratings": [
      {
        id: userID,
        user_id: 1,
        movie_id: 1,
        rating: ratingID,
        created_at: "someDate",
        updated_at: "someDate"
      }
    ]
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRatings)
      })
    });
  });

  it('should call fetch with the correct url', () => {
    getRatings(userID);

    expect(window.fetch).toHaveBeenCalledWith(url + `users/${userID}/ratings`);
  });

  it('should return a resolved promise when response is ok', () => {
    expect(getRatings(userID)).resolves.toEqual(mockRatings);
  });

  it('should return error if the resolved promise response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockRatings)
      });
    });
    expect(getRatings(userID)).rejects.toEqual(Error('Error! No 200 Status Code.'));
    expect(getRatings(userID)).rejects.toThrow(Error('Error! No 200 Status Code.'));
  });

  it('should return error if the resolved promise response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error! No 200 Status Code.'));
    });
    expect(getRatings(userID)).rejects.toEqual(Error('Error! No 200 Status Code.'));
  });
});

// deleteRating
describe('deleteRating', () => {
  const userID = 1;
  const ratingID = 45;
  const deleteOption = { method: 'DELETE' };

  const options = {
    deleteOption,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      })
    });
  });

  it('should call fetch with the correct url', () => {
    const deleteURL = `users/${userID}/ratings/${ratingID}`;

    deleteRating(userID, ratingID);

    expect(window.fetch).toHaveBeenCalledWith(url + deleteURL, deleteOption);
  });

  it('should return a resolved promise when response is ok', () => {
    expect(deleteRating(userID, ratingID)).resolves;
  });

  it('should return error if the resolved promise response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve()
      })
    })

    expect(deleteRating(userID, ratingID)).rejects.toEqual(Error('Error! No 200 Status Code.'));
  });
});
