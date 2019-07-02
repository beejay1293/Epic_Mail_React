import React from 'react';
import { mount, shallow, render } from 'enzyme';
import ViewSpecificMessage from './viewSpecificMessage';
import store from '../../store'
describe('view a message', () => {
  it('should render correctly if user wants to view a message', () => {
    const top = shallow(<ViewSpecificMessage store={store}/>);
  
    expect(top).toMatchSnapshot();
  });
});
