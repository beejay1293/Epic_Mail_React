import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Messagebody from './messagebody';
describe('Messages', () => {
  it('should render correctly all messages', () => {
    const Messages = shallow(<Messagebody />);
  
    expect(Messages).toMatchSnapshot();
  });
});
