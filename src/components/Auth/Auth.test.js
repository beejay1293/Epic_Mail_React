import React from 'react';
import sinon from 'sinon';
import { mount, shallow, render } from 'enzyme';
import Forms, { Form } from './auth';
import store from '../../store';
describe('Auth', () => {
  it('should render correctly in "debug" mode', () => {
    const Auth = shallow(<Forms store={store}/>);
  
    expect(Auth).toMatchSnapshot();
  });
});

describe('test auth', () => {
  const props = {
    isAuthenticated: true
  }

  const enzymeWrapper = shallow(<Form {...props} />);

  let wrapper;
  beforeEach(() => {
    wrapper = enzymeWrapper
  })

  it('should test form ', () => {
    expect(wrapper).toMatchSnapshot();
  })
})