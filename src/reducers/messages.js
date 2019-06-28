import {
    UNAUTHENTICATED,
    INBOX_SUCCESS,
    SENT_SUCCESS,
    UNREAD_SUCCESS,
    DASHBOARD_STATE
  } from '../constant/actionTypes';
  
  const initialState = {
    isAuthenticated: !!localStorage.getItem('jwtToken'),
    errors: {},
    inbox: [],
    sent: [],
    unread: [],
    dashboardstate: 'Inbox'
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
          dashboardstate: action.payload
        };
      case UNREAD_SUCCESS:
        return {
          ...state,
          unread: action.payload
        }
      default:
        return state;
    }
  };
  
  export default messagesReducer;
  