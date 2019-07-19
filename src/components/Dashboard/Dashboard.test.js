import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Dashboards, { Dashboard } from './dashboard';
import { messages } from '../../actions';
import store from '../../store'
describe('Dashboard', () => {
  it('should render correctly in "debug" mode', () => {
    const DashboardPage = shallow(<Dashboards store={store} />);
  
    expect(DashboardPage).toMatchSnapshot();
  });
});

describe('test method', () => {
  let [getMessages] = new Array(1).fill(jest.fn());
  const props = {
    getMessages: (type) => messages(type)
  }
  const enzymeWrapper = shallow(<Dashboard {...props} />)


describe('test', () => {
  let wrapper
  beforeEach(() => {
  wrapper = enzymeWrapper
  })

  it('should test method', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

})


