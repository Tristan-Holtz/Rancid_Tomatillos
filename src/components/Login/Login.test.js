import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';
import * as apiCalls from '../../apiCalls';

describe('Login', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      setUser: jest.fn()
    };
    wrapper = shallow(<Login {...mockProps} />);
  });
  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should should be able to set password in state', () => {
      const mockEvent = {
        target: {
          name: 'password',
          value: 'abc123'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('password')).toEqual('abc123');
    });

    it('should be able to set email in state', () => {
      const mockEvent = {
        target: {
          name: 'email',
          value: 'greg@turing.io'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('email')).toEqual('greg@turing.io');
    });
  });

  describe('handleSubmit', () => {});

  describe('createUser', () => {
    let mockState;
    beforeEach(() => {
      mockState = {
        email: 'greg@turing.io',
        password: 'abc123'
      };

      apiCalls.getUser = jest.fn().mockImplementation(() =>
        Promise.resolve({
          user: { name: 'Greg', email: 'greg@turing.io', password: 'abc123' }
        })
      );

      wrapper.setState(mockState);
    });
    it('should be able to get the user', () => {
      wrapper.instance().createUser();
      expect(apiCalls.getUser).toHaveBeenCalledWith(
        mockState.email,
        mockState.password
      );
    });

    it('should be able to set the user', async () => {
      await wrapper.instance().createUser();

      expect(mockProps.setUser).toHaveBeenCalled();
    });

    it('should set an error message if fetch fails', async () => {
      apiCalls.getUser = jest
        .fn()
        .mockImplementation(() =>
          Promise.reject(new Error('Error! No 200 Status Code Found.'))
        );
      await wrapper.instance().createUser();
      expect(wrapper.state('error')).toEqual(
        'Error! No 200 Status Code Found.'
      );
    });
  });
});
