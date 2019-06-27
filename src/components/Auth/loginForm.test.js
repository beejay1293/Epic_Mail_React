import React from 'react';
import store from '../../store';
import { mount, shallow, render } from 'enzyme';
import LoginForm from './loginForm';
describe('Login form', () => {
  it('should render correctly the login form', () => {
    const Form = shallow(<LoginForm store={store}/>);
  
    expect(Form).toMatchSnapshot();
  });
});