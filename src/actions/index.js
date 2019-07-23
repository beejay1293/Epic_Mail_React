import authAPI from '../utils/authAPI';
import { messagesAPI, getSpecificMessageApi, sendMessage, deleteMessage } from '../utils/inboxAPI';
import {
  UNAUTHENTICATED,
  AUTHENTICATING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  AUTHENTICATED,
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
import dashboard from '../components/Dashboard/dashboard';

export const authenticating = () => ({
  type: AUTHENTICATING,
});

export const authenticated = () => ({
  type: AUTHENTICATED,
});

export const unauthenticated = () => ({
  type: UNAUTHENTICATED,
});

export const signinSuccess = user => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signinError = error => ({
  type: SIGNIN_ERROR,
  payload: error,
});

export const signupError = error => ({
  type: SIGNUP_ERROR,
  payload: error,
});

export const inboxSuccess = messages => ({
   type: INBOX_SUCCESS,
   payload: messages
})

export const sentSuccess = messages => ({
  type: SENT_SUCCESS,
  payload: messages
})

export const unreadSuccess = messages => ({
  type: UNREAD_SUCCESS,
  payload: messages
})

export const dashboardState = state => ({
  type: DASHBOARD_STATE,
  payload: state,
  body: 'viewMessages'
})

export const getSPecificMessage = message => ({
  type: SPECIFIC_MESSAGE_SUCCESS,
  payload: message,
  body: 'readEmail'
})

export const loading = () => ({
  type: LOADING,
})
export const sending = () => ({
  type: SENDING,
})

export const messageSuccess = () => ({
  type: MESSAGE_SUCCESS
})

export const messageError = (errorMessage) => ({
  type: MESSAGE_ERROR,
  payload: errorMessage
})
export const auth = (type, user, history) => async (dispatch) => {
  try {
    dispatch(authenticating());
    const response = await authAPI(type, user);
    // console.log('....', response.data.data.token);
    localStorage.setItem('jwtToken', response.data.data.token)
    const dispatchType = type === 'signin' ? signinSuccess : signupSuccess;
    history.push('/dashboard');

    dispatch(dispatchType(response.data));
  } catch (err) {
    const errorResponse = err.response;
    const dispatchType = type === 'signin' ? signinError : signupError;

    dispatch(dispatchType(errorResponse));
  }
};

export const messages = (type) => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await messagesAPI(type);


    let dispatchType;
    if(type === ''){
     dispatchType = inboxSuccess
    }else if(type === 'sent'){
      dispatchType = sentSuccess
    }else if(type === 'unread'){
      dispatchType = unreadSuccess
    }

    dispatch(dispatchType(response.data.data))
    
  } catch (err) {
    const errorResponse = err.response;
    console.log(errorResponse);
    
  }
}
export const changeDashboardState = (newDashState) => {
  return dispatch => {
    dispatch(dashboardState(newDashState))
  }
}

export const fetchSpecificMessage = (messageId) => async(dispatch) => {
  try {
    dispatch(loading());

    const response = await getSpecificMessageApi(messageId)
   
    dispatch(getSPecificMessage(response.data))
    
  } catch (error) {
    
  }
}

export const deleteSpecificMessage = (id) => async(dispatch) => {
  try {
    dispatch(loading());

    const response = await deleteMessage(id)

    

  } catch (error) {
    console.log(error.response);
    
  }
}

export const sendMessageAction = (messageDetail) => async (dispatch) => {
  try {
    dispatch(sending())
    const sent = await sendMessage(messageDetail)
    dispatch(messageSuccess())
    
  } catch (error) {
    dispatch(messageError(error.response))
    
  }
}


