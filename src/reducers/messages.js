import {
    UNAUTHENTICATED,
    INBOX_SUCCESS,
    SENT_SUCCESS,
    UNREAD_SUCCESS,
    DASHBOARD_STATE,
    SPECIFIC_MESSAGE_SUCCESS
  } from '../constant/actionTypes';
  
  const initialState = {
    isAuthenticated: !!localStorage.getItem('jwtToken'),
    errors: {},
    inbox: [],
    sent: [],
    unread: [],
    dashboardstate: 'Inbox',
    specificMessage: {},
    body: 'viewMessages',
    sender: {},
    receiver: {}
  };
  
  const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case INBOX_SUCCESS:
        return {
          ...state,
          inbox: action.payload,
        };
      case SENT_SUCCESS:
        return {
          ...state,
         sent: action.payload
        };
      case DASHBOARD_STATE:
        return {
          ...state,
          dashboardstate: action.payload,
          body: action.body
        };
      case UNREAD_SUCCESS:
        return {
          ...state,
          unread: action.payload
        };
      case SPECIFIC_MESSAGE_SUCCESS:
         return {
           ...state,
           specificMessage: action.payload.data,
           sender: action.payload.sender,
           receiver: action.payload.receiver,
           body: action.body
         }
      default:
        return state;
    }
  };
  
  export default messagesReducer;
  