import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Dashboard from './dashboard';
describe('Dashboard', () => {
  it('should render correctly in "debug" mode', () => {
    const DashboardPage = shallow(<Dashboard />);
  
    expect(DashboardPage).toMatchSnapshot();
  });
});

