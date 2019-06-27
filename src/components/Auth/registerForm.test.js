import React from 'react';
import store from '../../store';
import { mount, shallow, render } from 'enzyme';
import RegisterForm from './registerForm';
describe('Register form', () => {
  it('should render correctly the Register form', () => {
    const Form = shallow(<RegisterForm store={store}/>);
  
    expect(Form).toMatchSnapshot();
  });
});