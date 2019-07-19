import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  auth,
  messages,
  fetchSpecificMessage,
  changeDashboardState,
  signinSuccess,
  signupSuccess,
  signinError,
  signupError,
  inboxSuccess,
  sentSuccess,
  unreadSuccess,
  dashboardState,
  getSPecificMessage,
  authenticating
} from '../actions/index';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('test async functions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({})

  })
  afterEach(() => {
    nock.cleanAll()
  })

  it('it tests login method', () => {
    nock('https://andela-epic-mail.herokuapp.com').post('/api/v2/auth/login').reply(200, {})

    const email = 'mattimobolaji@gmail.com'
    const password = 'december'

    const userDetails = {
      email, password,
    };

    return store.dispatch(auth(userDetails)).then(() => {
      expect(store.getActions()).toMatchSnapshot()
    })
  })

  it('tests signup method', () => {
    nock('https://andela-epic-mail.herokuapp.com').post('/api/v2/auth/signup').reply(200, {})
    const userDetails = {
      firstname: 'mobolaji',
    lastname: 'matti',
    email: 'mAmmsmd@gmail.com',
    number: '64657895436',
    password: 'december',
    pw2: 'december'
    }

    return store.dispatch(auth(userDetails)).then(() => {
      expect(store.getActions()).toMatchSnapshot()
    })

  })

  it('tests get inbox messages endpoint', () => {
    nock('https://andela-epic-mail.herokuapp.com').get('/api/v2/messages').reply(200, {})

    return store.dispatch(messages()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    })
  })

  it('tests get sent messages endpoint', () => {
    nock('https://andela-epic-mail.herokuapp.com').get('/api/v2/messages/sent').reply(200, {})

    return store.dispatch(messages()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    })
  })

  it('tests get unread nmessages endpoint', () => {
    nock('https://andela-epic-mail.herokuapp.com').get('/api/v2/messages/unread').reply(200, {})

    return store.dispatch(messages()).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    })
  })

  it('create signinsuccess action', () => {
    store.dispatch(signinSuccess({}))
      expect(store.getActions()).toMatchSnapshot();
  })

  it('tests getSpecific message endpoint', () => {
    nock('https://andela-epic-mail.herokuapp.com').get('/api/v2/messages/2').reply(200, {})

    return store.dispatch(fetchSpecificMessage('2')).then(() => {
      expect(store.getActions()).toMatchSnapshot();
    })
  })
  
  it('tests authenticating action', () => {
    store.dispatch(authenticating());
    expect(store.getActions()).toMatchSnapshot()
  })

  it('tests getSpecific message action', () => {
    store.dispatch(getSPecificMessage({}));
    expect(store.getActions()).toMatchSnapshot();
  })

  it('tests changeDashboardState action', () => {
    store.dispatch(changeDashboardState('sent'));
    expect(store.getActions()).toMatchSnapshot();
  })




})
