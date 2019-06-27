import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Compose from './compose';
describe('Compose message button', () => {
  it('should render correctly the compose message button', () => {
    const ComposeBtn = shallow(<Compose />);
  
    expect(ComposeBtn).toMatchSnapshot();
  });
});
