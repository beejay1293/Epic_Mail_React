import React from 'react';
import sinon from 'sinon';
import store from '../../store';
import { mount, shallow, render } from 'enzyme';
import RegisterForm, { Register } from './registerForm';
describe('Register form', () => {
  it('should render correctly the Register form', () => {
    const Form = shallow(<RegisterForm store={store}/>);
  
    expect(Form).toMatchSnapshot();
  });
});

describe('test register', () => {
  sinon.spy(Register.prototype, 'handleChange');
  sinon.spy(Register.prototype, 'handleSubmit');

  const props = {
    isAuthenticated: true,
    isLoading: true,
    user: {},
    errors: {},
    auth: () => {}
  }

  const enzymeWrapper = shallow(<Register {...props} />)

describe('test register methods', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = enzymeWrapper;
  })

  it('should test the button', () => {
    const button = wrapper.find('form');
    const e = { target: {}, preventDefault: () => {}}

    button.simulate('submit', e);
    expect(Register.prototype.handleSubmit.called).toBe(true)
  })

  it('should test the input field', () => {
    const input = wrapper.find('input').first();
    const e = { target: {}, preventDefault: ()  => {}}

    input.simulate('change', e);
    expect(Register.prototype.handleChange.called).toBe(true)

  })

  it('should test the input field', () => {
    const input = wrapper.find('input').at(1);
    const e = { target: {}, preventDefault: ()  => {}}

    input.simulate('change', e);
    expect(Register.prototype.handleChange.called).toBe(true)

  })

   it('should test the input field', () => {
    const input = wrapper.find('input').at(2);
    const e = { target: {}, preventDefault: ()  => {}}

    input.simulate('change', e);
    expect(Register.prototype.handleChange.called).toBe(true)

  })

  it('should test the input field', () => {
    const input = wrapper.find('input').at(3);
    const e = { target: {}, preventDefault: ()  => {}}

    input.simulate('change', e);
    expect(Register.prototype.handleChange.called).toBe(true)

  })

  it('should test the input field', () => {
    const input = wrapper.find('input').at(4);
    const e = { target: {}, preventDefault: ()  => {}}

    input.simulate('change', e);
    expect(Register.prototype.handleChange.called).toBe(true)

  })

  it('should test the input field', () => {
    const input = wrapper.find('input').at(5);
    const e = { target: {}, preventDefault: ()  => {}}

    input.simulate('change', e);
    expect(Register.prototype.handleChange.called).toBe(true)

  })
  

})


})

describe('test register methods', () => {
  const props = {
    isAuthenticated: true,
    isLoading: false,
    user: {},
    errors: {},
    auth: () => {}
  }
  const enzymeWrapper = shallow(<Register {...props} />);

  it('should test wrapper', () => {
    expect(enzymeWrapper).toMatchSnapshot();
  })

})