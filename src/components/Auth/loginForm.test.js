import React from 'react';
import sinon from 'sinon'
import store from '../../store';
import { mount, shallow, render } from 'enzyme';
import LoginForm, { Login } from './loginForm';
describe('Login form', () => {
  it('should render correctly the login form', () => {
    const Form = shallow(<LoginForm store={store}/>);
  
    expect(Form).toMatchSnapshot();
  });
});

describe('test login methods', () => {
  sinon.spy(Login.prototype, 'handleInput');
  sinon.spy(Login.prototype, 'handleSubmit');

  const props = {
    isAuthenticated: true,
    isLoading: true,
    user: {},
    errors: {},
    auth: () => {}
  }

  const enzymeWrapper = shallow(<Login {...props} />);

 describe('Login', () => {
   let wrapper;
   beforeEach(() => {
     wrapper = enzymeWrapper;
   })

   it('test the submit button', () => {
     const form = wrapper.find('.login-form')
     const mockedEvent = { target: {}, preventDefault: () => {} }
     form.simulate('submit', mockedEvent)
     expect(Login.prototype.handleSubmit.called).toBe(true);
   })

   it('should test the Input field', () => {
      const input = wrapper.find('input').first();
      const e = { target: {}, preventDefault: () => {}};

      input.simulate('change', e)
      expect(Login.prototype.handleInput.called).toBe(true);
   })

    it('should test the Input field', () => {
      const input = wrapper.find('input').at(1);
      const e = { target: {}, preventDefault: () => {}};

      input.simulate('change', e)
      expect(Login.prototype.handleInput.called).toBe(true);
   })
 })


})

describe('test login methods', () => {
  const props = {
    isAuthenticated: true,
    isLoading: false,
    user: {},
    errors: {},
    auth: () => {}
  }
  const enzymeWrapper = shallow(<Login {...props} />);

  it('should test wrapper', () => {
    expect(enzymeWrapper).toMatchSnapshot();
  })

})