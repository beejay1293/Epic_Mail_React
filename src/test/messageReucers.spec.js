import {
  UNAUTHENTICATED,
  INBOX_SUCCESS,
  SENT_SUCCESS,
  UNREAD_SUCCESS,
  DASHBOARD_STATE,
  SPECIFIC_MESSAGE_SUCCESS
} from '../constant/actionTypes';
import messageReducer, { initialState } from '../reducers/messages';


describe('test message reducers', () => {
  it('should test UNAUTHENTICATE', () => {
    expect(messageReducer(initialState, {
      type: UNAUTHENTICATED
    })).toMatchSnapshot();
  })

  it('should test INBOX_SUCCESS', () => {
    expect(messageReducer(initialState, {
      type: INBOX_SUCCESS
    })).toMatchSnapshot();
  })

  it('should test SENT_SUCCESS', () => {
    expect(messageReducer(initialState, {
      type: SENT_SUCCESS
    })).toMatchSnapshot();
  })

  it('should test UNREAD_SUCCESS', () => {
    expect(messageReducer(initialState, {
      type: UNREAD_SUCCESS
    })).toMatchSnapshot();
  })

  it('should test DASHBOARD STATE', () => {
    expect(messageReducer(initialState, {
      type: DASHBOARD_STATE
    })).toMatchSnapshot();
  })

  // it('should test SPECIFIC_MESSAGE_SUCCESS', () => {
  //   expect(messageReducer(initialState, {
  //     type: SPECIFIC_MESSAGE_SUCCESS
  //   })).toMatchSnapshot();
  // })
})