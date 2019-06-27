import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Home from './home';
describe('Home', () => {
  it('should render correctly in "debug" mode', () => {
    const Homepage = shallow(<Home />);
  
    expect(Homepage).toMatchSnapshot();
  });
});