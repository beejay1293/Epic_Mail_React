import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Btn from './btn';
import store from '../../store'
describe('Sidebar buttons', () => {
  it('should render correctly the sidebar buttons', () => {
    const Btns = shallow(<Btn store={store}/>);
  
    expect(Btns).toMatchSnapshot();
  });
});
