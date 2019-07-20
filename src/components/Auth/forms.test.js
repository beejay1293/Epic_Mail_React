import React from 'react';
import sinon from 'sinon';
import { mount, shallow, render } from 'enzyme';
import Forms from './forms';
describe('Form', () => {
  it('should render correctly the register form', () => {
    const Form = shallow(<Forms />);
  
    expect(Form).toMatchSnapshot();
  });
});

describe('test form', () => {
  sinon.spy(Forms.prototype, 'changeForm')

  const enzymeWrapper = shallow(<Forms />);



describe('test changeForm method', () => {
  let wrapper;
    wrapper = enzymeWrapper;

  it('should test changeForm method', () => {
    const button = wrapper.find('.signinbtn')

    button.simulate('click')
    expect(Forms.prototype.changeForm.called).toBe(true)
  })
})
})