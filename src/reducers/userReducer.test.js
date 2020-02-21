import { userReducer } from './userReducer'

describe('userReducer', () => {

  it('should return the default initial state if there is no state provided', () => {
    const expected = '';
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action type is SET_USER', () => {
    const expected = 'Greg'
    const mockAction = {
      type: 'SET_USER',
      user: 'Greg'
    }
    const result = userReducer(undefined, mockAction)
    expect(result).toEqual(expected)
  })

})