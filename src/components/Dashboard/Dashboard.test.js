import React from 'react';
import sinon from 'sinon';
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
  sinon.spy(Dashboard.prototype, 'handleModal');
  sinon.spy(Dashboard.prototype, 'handleInput');
  sinon.spy(Dashboard.prototype, 'handleSubmit');

  let [getMessages] = new Array(1).fill(jest.fn());
  const props = {
    getMessages: (type) => messages(type),
    sendMessage: () => {}
  }
  const enzymeWrapper = shallow(<Dashboard {...props} />)


describe('test', () => {
  let wrapper
  beforeEach(() => {
  wrapper = enzymeWrapper
  })

  it('should test method', () => {
    expect(wrapper).toMatchSnapshot();
    const input = wrapper.find('input').at(1)


    const e = { target: {}, preventDefault: () => {}};
    input.simulate('change', e);

    expect(Dashboard.prototype.handleInput.called).toBe(true);
  })

  it('should test second input', () => {
    expect(wrapper).toMatchSnapshot();
    const input = wrapper.find('input').at(0);
    const e = { target: {}, preventDefault: () => {}};
    input.simulate('change', e);

    expect(Dashboard.prototype.handleInput.called).toBe(true);
  })

  it('should test third input', () => {
    expect(wrapper).toMatchSnapshot();
    const textbox = wrapper.find('textarea').first()

    const e = { target: {}, preventDefault: () => {}};
    textbox.simulate('change', e);

    expect(Dashboard.prototype.handleInput.called).toBe(true);
  })
  it('should test submit button', () => {
    const button = wrapper.find('button').first();
     const e = { target: {}, preventDefault: () => {}}
    button.simulate('click', e)

    expect(Dashboard.prototype.handleSubmit.called).toBe(true)
  })

  it('should test hide modal', () => {
    const clear = wrapper.find('.clear__overlay');
    clear.simulate('click');
    expect(Dashboard.prototype.handleModal.called).toBe(true);
  })

  it('should test', () => {
    wrapper.setState({sidebarstate: false})
    expect(wrapper).toMatchSnapshot();
  })
})

})


