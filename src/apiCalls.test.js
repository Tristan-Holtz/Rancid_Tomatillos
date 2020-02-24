import { getUser, getMovies } from './apiCalls.js';
// import { shallow } from 'enzyme';

describe('getUser', () => {
  const email = 'alan@turing.io';
  const password = 'abc123';

  const mockResponse = {
    id: 1,
    name: 'Alan',
    email
  }

  const mockUser = {
    email,
    password
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
    expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/login', options);
  });

  it('should return a resolved promise', () => {
    expect(getUser(email, password)).resolves.toEqual(mockUser);
  });

  it('should return error if the resolved promise response is OK (Happy Path)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockIdea)
      })
    })

    expect(getUser(email, password)).rejects.toEqual(Error('Error! No 200 Status Code.'));
  });
});

describe('getMovies', () => {
  const mockMovies = {
    "movies": [
      {
        id: 1,
        title: "Movie Title",
        poster_path: "someURL",
        backdrop_path: "someURL",
        release_date: "2019-12-04",
        overview: "Some overview",
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

    expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies');
  });

  it('should return a resolved promise when response is ok', () => {
    expect(getMovies()).resolves.toEqual(mockMovies);
  });

  it('should return error if the resolved promise response is not OK', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockMovies)
      });
    });
    expect(getMovies()).rejects.toEqual(Error('Error! No 200 Status Code.'));
    expect(getMovies()).rejects.toThrow(Error('Error! No 200 Status Code.'));
  });

  it('should return error if the resolved promise response is not OK (Sad Path)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("Error! No 200 Status Code."));
    });
    expect(getMovies()).rejects.toEqual(Error('Error! No 200 Status Code.'));
  });
});
