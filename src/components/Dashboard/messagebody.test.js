import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Messagebody from './messagebody';
import store from '../../store';
describe('Messages', () => {
  it('should render correctly all messages', () => {
    const Messages = shallow(<Messagebody store={store}/>);
  
    expect(Messages).toMatchSnapshot();
  });
});
