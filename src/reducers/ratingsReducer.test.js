import { ratingsReducer } from './ratingsReducer'

describe('ratingsReducer', () => {

  it('should return the initial state if no state is provided', () => {
    const expected = [];
    const result = ratingsReducer(undefined, {})

    expect(result).toEqual(expected)
  });

  it('should return the correct state if the action type is SET_RATINGS', () => {
    const expected = {ratings: 'mock rating 1'}
    const mockRating = {ratings: 'mock rating 1'}
    const mockAction = {
      type: 'SET_RATINGS',
      ratings: mockRating
    }
    const result = ratingsReducer(undefined, mockAction)
    expect(result).toEqual(expected)
  })
})