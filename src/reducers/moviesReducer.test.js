import { moviesReducer } from './moviesReducer'

describe('moviesReducer', () => {

  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = moviesReducer(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return the correct state if the action type is SET_MOVIES', () => {
    const expected = {movie: 'mock movie 1'}
    const mockMovie = {movie: 'mock movie 1'}
    const mockAction = {
      type: 'SET_MOVIES',
      movies: mockMovie
    }
    const mockState = [{movie: 'mock movie 1'}]
    const result = moviesReducer(undefined, mockAction)
    expect(result).toEqual(expected)
  })

})