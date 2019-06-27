import React from 'react';
import { mount, shallow, render } from 'enzyme';
import SingleBtn from './SingleBtn';
describe('Single button', () => {
  it('should render correctly in single button with props', () => {
    const SBtn = shallow(<SingleBtn styles= 'inbox__btn active' name='Inbox' font='fas fa-inbox'/>);
  
    expect(SBtn).toMatchSnapshot();
  });
});
