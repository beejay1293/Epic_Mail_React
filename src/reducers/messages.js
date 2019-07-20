import {
    UNAUTHENTICATED,
    INBOX_SUCCESS,
    SENT_SUCCESS,
    UNREAD_SUCCESS,
    DASHBOARD_STATE,
    SPECIFIC_MESSAGE_SUCCESS,
    LOADING,
    SENDING,
    MESSAGE_SUCCESS,
    MESSAGE_ERROR
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
    receiver: {},
    isLoading: false,
    sending: false,
    messageSuccess: '',
    messageError: ''
  };
  
  const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case INBOX_SUCCESS:
        return {
          ...state,
          inbox: action.payload,
          isLoading: false,
          sending: false
        };
      case SENT_SUCCESS:
        return {
          ...state,
         sent: action.payload,
         isLoading: false,
         sending: false
        };
      case DASHBOARD_STATE:
        return {
          ...state,
          dashboardstate: action.payload,
          body: action.body,
          isLoading: false,
          sending: false
        };
      case UNREAD_SUCCESS:
        return {
          ...state,
          unread: action.payload,
          isLoading: false,
          sending: false
        };
      case SPECIFIC_MESSAGE_SUCCESS:
         return {
           ...state,
           specificMessage: action.payload.data,
           sender: action.payload.sender,
           receiver: action.payload.receiver,
           body: action.body,
           isLoading: false,
           sending: false
         };
      case LOADING:
         return {
             ...state,
             isLoading: true,
         }
      case SENDING:
         return {
             ...state,
             sending: true
         }
      case MESSAGE_SUCCESS:
          return {
              ...state,
              messageSuccess: 'message sent successfully',
              messageError: '',
              sending: false
          }  
      case MESSAGE_ERROR:
            return {
                ...state,
                messageSuccess: '',
                messageError: action.payload.data.error,
                sending: false
            }  
      default:
        return state;
    }
  };
  
  export default messagesReducer;
  