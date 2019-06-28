import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Dashboard from './dashboard';
import store from '../../store'
describe('Dashboard', () => {
  it('should render correctly in "debug" mode', () => {
    const DashboardPage = shallow(<Dashboard store={store}/>);
  
    expect(DashboardPage).toMatchSnapshot();
  });
});

