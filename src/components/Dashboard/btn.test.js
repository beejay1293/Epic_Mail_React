import React from 'react';
import sinon from 'sinon';
import { mount, shallow, render } from 'enzyme';
import Btns, { Btn } from './btn';
import store from '../../store'
import { changeDashboardState } from '../../actions/index'
describe('Sidebar buttons', () => {
  it('should render correctly the sidebar buttons', () => {
    const Btns = shallow(<Btn store={store}/>);
  
    expect(Btns).toMatchSnapshot();
  });
});

describe('test btn', () => {

  let [changeState] = new Array(1).fill(jest.fn());
 const props = {
  isAuthenticated: true,
  inbox: '',
  sent: '',
  unread: '',
  Dashboardstate: '',
  errors: '',
  changeState: () => {}
 }

 const enzymeWrapper = shallow(<Btn  {...props} />);
 let wrapper;
 let prop
 beforeEach(() => {
   wrapper = enzymeWrapper;
   prop = props
 })

 it('should test a method', () => {
   const button = wrapper.find('SingleBtn').first()

   expect(wrapper).toMatchSnapshot();
 })
})
