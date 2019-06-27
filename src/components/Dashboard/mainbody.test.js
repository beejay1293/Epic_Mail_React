import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Mainbody from './mainbody';
describe('Main Body', () => {
  it('should render correctly the main body', () => {
    const Main = shallow(<Mainbody />);
  
    expect(Main).toMatchSnapshot();
  });
});
