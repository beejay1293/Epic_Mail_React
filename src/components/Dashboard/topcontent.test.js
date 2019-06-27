import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Topcontent from './topcontent';
describe('Top content', () => {
  it('should render correctly topcontent', () => {
    const top = shallow(<Topcontent />);
  
    expect(top).toMatchSnapshot();
  });
});
