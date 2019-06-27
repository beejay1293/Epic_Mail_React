import React from 'react';
import { mount, shallow, render } from 'enzyme';
import SingleMessage from './SingleMessage';
describe('Single Message', () => {
  it('should render correctly a Single Message component', () => {
    const Message = shallow(<SingleMessage style='inbox__message' name='draft' messages='i need a message' time='12th' />);
  
    expect(Message).toMatchSnapshot();
  });
});
