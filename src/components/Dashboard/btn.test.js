import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Btn from './btn';
describe('Sidebar buttons', () => {
  it('should render correctly the sidebar buttons', () => {
    const Btns = shallow(<Btn />);
  
    expect(Btns).toMatchSnapshot();
  });
});
