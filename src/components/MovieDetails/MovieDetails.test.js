import React from 'react';
import { shallow } from 'enzyme';
import { MovieDetails } from './MovieDetails';

describe('MovieDetails', () => {
  it('should render the component', () => {
    const mockProps = {
      location: {
        state: {
          id: 21,
          backdrop_path: '',
          poster_path: '',
          title: 'Sanic',
          overview: 'Sanic goes fast',
          average_rating: 6,
          release_date: 'TODAY'
        }
      }
    };
    const wrapper = shallow(<MovieDetails {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
