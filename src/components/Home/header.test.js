import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Header from './header';
describe('Homepage Header', () => {
  it('should render correctly the Homepage header', () => {
    const Head = shallow(<Header />);
  
    expect(Head).toMatchSnapshot();
  });
});