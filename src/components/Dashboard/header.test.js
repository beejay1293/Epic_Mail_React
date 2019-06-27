import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Header from './header';
describe('Dashboard Header', () => {
  it('should render correctly the dashboard header', () => {
    const Head = shallow(<Header />);
  
    expect(Head).toMatchSnapshot();
  });
});
