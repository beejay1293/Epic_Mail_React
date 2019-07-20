import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Messages, { MessageBody } from './messagebody';
import store from '../../store';
import { messages, fetchSpecificMessage } from '../../actions'
describe('Messages', () => {
  it('should render correctly all messages', () => {
    const Messagess = shallow(<Messages store={store}/>);
  
    expect(Messagess).toMatchSnapshot();
  });
});

describe('test messageBody', () => {
  const props = {
    Dashboardstate: 'Inbox',
    getMessage: () => {},
    inbox: []
  }

  const enzymeWrapper = shallow(<MessageBody {...props} />)
  let wrapper;
  beforeEach(() => {
    
    wrapper = enzymeWrapper
  })

  it('should test messageBody', () => {
    expect(wrapper).toMatchSnapshot();
  })

})

describe('test messageBody', () => {
  const props = {
    Dashboardstate: 'unread',
    getMessage: () => {},
    unread: []
  }

  const enzymeWrapper = shallow(<MessageBody {...props} />)
  let wrapper;
  beforeEach(() => {
    
    wrapper = enzymeWrapper
  })

  it('should test messageBody', () => {
    expect(wrapper).toMatchSnapshot();
  })

})

describe('test messageBody', () => {
  const props = {
    Dashboardstate: 'sent',
    getMessage: () => {},
    sent: []
  }

  const enzymeWrapper = shallow(<MessageBody {...props} />)
  let wrapper;
  beforeEach(() => {
    
    wrapper = enzymeWrapper
  })

  it('should test messageBody', () => {
    expect(wrapper).toMatchSnapshot();
  })

})

// describe('test method', () => {
//   let [getMessage] = new Array(1).fill(jest.fn());
//   const props = {
//     Dashboardstate: 'inbox',
//     getMessage: () => {}
//   }
//   const enzymeWrapper = shallow(<MessageBody {...props} />,  { context: {...context} })


// describe('test', () => {
//   let wrapper
//   beforeEach(() => {
//   wrapper = enzymeWrapper
//   })

//   it('should test method', () => {
//     expect(wrapper).toMatchSnapshot();
//   })
// })

// })
