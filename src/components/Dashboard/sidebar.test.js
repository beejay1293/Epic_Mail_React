import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Sidebar from './sidebar';
describe('Single button', () => {
  it('should render correctly the sidebar', () => {
    const Sbar = shallow(<Sidebar />);
  
    expect(Sbar).toMatchSnapshot();
  });
});
