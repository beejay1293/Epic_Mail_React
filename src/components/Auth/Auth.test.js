import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Form from './auth';
describe('Auth', () => {
  it('should render correctly in "debug" mode', () => {
    const Auth = shallow(<Form />);
  
    expect(Auth).toMatchSnapshot();
  });
});