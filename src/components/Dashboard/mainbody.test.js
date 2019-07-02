import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Mainbody from './mainbody';
import store from '../../store'
describe('Main Body', () => {
  it('should render correctly the main body', () => {
    const Main = shallow(<Mainbody store={store}/>);
  
    expect(Main).toMatchSnapshot();
  });
});
