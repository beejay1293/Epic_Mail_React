import authAPI from '../utils/authAPI';
import { messagesAPI, getSpecificMessageApi } from '../utils/inboxAPI';
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
    console.log(err);
    const dispatchType = type === 'signin' ? signinError : signupError;

    dispatch(dispatchType(errorResponse));
  }
};

export const messages = (type) => async (dispatch) => {
  try {
    dispatch(authenticating());
    const response = await messagesAPI(type);

    console.log(type, response);

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
    console.log(err);
    
  }
}
export const changeDashboardState = (newDashState) => {
  return dispatch => {
    dispatch(dashboardState(newDashState))
  }
}

export const fetchSpecificMessage = (messageId) => async(dispatch) => {
  try {
    dispatch(authenticating());

    const response = await getSpecificMessageApi(messageId)

    console.log(response.data);
    

    dispatch(getSPecificMessage(response.data))
    
  } catch (error) {
    
  }
}

