import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      user: { name: 'Greg' },
      logoutUser: jest.fn()
    };
    wrapper = shallow(<Header {...mockProps} />);
  });
  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logoutUser when Link is clicked', () => {
    wrapper.find('Link').simulate('click');

    expect(mockProps.logoutUser).toHaveBeenCalled();
  });
});
