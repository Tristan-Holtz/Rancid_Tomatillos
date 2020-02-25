import React from 'react';
import { shallow } from 'enzyme';
import {
  MoviesContainer,
  mapStateToProps,
  mapDispatchToProps
} from './MoviesContainer';
import { setMovies } from '../../actions/actions';

describe('MoviesContainer', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      movies: [
        {
          title: 'movie1',
          average_rating: 6,
          numeric_date: 20200101,
          id: 1,
          release_date: '2020-01-01',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie2',
          average_rating: 4,
          numeric_date: 20200202,
          id: 2,
          release_date: '2020-02-02',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie3',
          average_rating: 8,
          numeric_date: 20200303,
          id: 3,
          release_date: '2020-03-03',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        }
      ]
    };
    wrapper = shallow(<MoviesContainer {...mockProps} />);
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('sortArray', () => {
    it('should return an array sorted by highest ratings if value is high', () => {
      const result = wrapper.instance().sortArray('high');
      const expected = [
        {
          title: 'movie3',
          average_rating: 8,
          numeric_date: 20200303,
          id: 3,
          release_date: '2020-03-03',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie1',
          average_rating: 6,
          numeric_date: 20200101,
          id: 1,
          release_date: '2020-01-01',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie2',
          average_rating: 4,
          numeric_date: 20200202,
          id: 2,
          release_date: '2020-02-02',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        }
      ];

      expect(result).toEqual(expected);
    });

    it('should return an array sorted by lowest ratings if value is low', () => {
      const result = wrapper.instance().sortArray('low');
      const expected = [
        {
          title: 'movie2',
          average_rating: 4,
          numeric_date: 20200202,
          id: 2,
          release_date: '2020-02-02',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie1',
          average_rating: 6,
          numeric_date: 20200101,
          id: 1,
          release_date: '2020-01-01',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie3',
          average_rating: 8,
          numeric_date: 20200303,
          id: 3,
          release_date: '2020-03-03',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        }
      ];

      expect(result).toEqual(expected);
    });

    it('should return an array sorted by newest ratings if value is new', () => {
      const result = wrapper.instance().sortArray('new');
      const expected = [
        {
          title: 'movie3',
          average_rating: 8,
          numeric_date: 20200303,
          id: 3,
          release_date: '2020-03-03',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie2',
          average_rating: 4,
          numeric_date: 20200202,
          id: 2,
          release_date: '2020-02-02',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie1',
          average_rating: 6,
          numeric_date: 20200101,
          id: 1,
          release_date: '2020-01-01',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        }
      ];

      expect(result).toEqual(expected);
    });

    it('should return an array sorted by oldest ratings if value is old', () => {
      const result = wrapper.instance().sortArray('old');
      const expected = [
        {
          title: 'movie1',
          average_rating: 6,
          numeric_date: 20200101,
          id: 1,
          release_date: '2020-01-01',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie2',
          average_rating: 4,
          numeric_date: 20200202,
          id: 2,
          release_date: '2020-02-02',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie3',
          average_rating: 8,
          numeric_date: 20200303,
          id: 3,
          release_date: '2020-03-03',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        }
      ];

      expect(result).toEqual(expected);
    });

    it('should return an array sorted by lowest ratings if value is low', () => {
      const result = wrapper.instance().sortArray('low');
      const expected = [
        {
          title: 'movie2',
          average_rating: 4,
          numeric_date: 20200202,
          id: 2,
          release_date: '2020-02-02',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie1',
          average_rating: 6,
          numeric_date: 20200101,
          id: 1,
          release_date: '2020-01-01',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        },
        {
          title: 'movie3',
          average_rating: 8,
          numeric_date: 20200303,
          id: 3,
          release_date: '2020-03-03',
          poster_path: '',
          backdrop_path: '',
          overview: ''
        }
      ];

      expect(result).toEqual(expected);
    });
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
      const movies = ['movie', 'movie', 'movie'];
      const actionToDispatch = setMovies(movies);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
