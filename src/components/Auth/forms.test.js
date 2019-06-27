import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Forms from './forms';
describe('Form', () => {
  it('should render correctly the register form', () => {
    const Form = shallow(<Forms />);
  
    expect(Form).toMatchSnapshot();
  });
});