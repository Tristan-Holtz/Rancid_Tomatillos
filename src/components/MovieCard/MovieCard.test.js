import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import { setRatings } from '../../actions/actions';
import { addUserRating, getRatings, deleteRating } from '../../apiCalls';

describe('MovieCard', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      user: { id: 1 },
      movie: { id: 2, average_rating: 5, poster_path: '' },
      ratings: [{ movie_id: 1 }, { movie_id: 2 }],
      setRatings: jest.fn(),
      event: {
        target: {
          value: 6,
          id: 2
        }
      }
    };
    wrapper = shallow(<MovieCard {...mockProps} />);
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with movies, user and ratings', () => {
      const mockState = {
        movies: ['movie', 'movie', 'movie'],
        user: { name: 'Greg', password: 'abc123', email: 'greg@turing.io' },
        ratings: [1, 2, 3, 4, 5],
        banana: 'bananas',
        potatoes: 'potatoes'
      };
      const expected = {
        movies: ['movie', 'movie', 'movie'],
        user: { name: 'Greg', password: 'abc123', email: 'greg@turing.io' },
        ratings: [1, 2, 3, 4, 5]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the setRatings action when getSetRatings is called', () => {
      const mockDispatch = jest.fn();
      const ratings = { ratings: [1, 2, 3, 4, 5] };
      const actionToDispatch = setRatings(ratings);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setRatings(ratings);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
