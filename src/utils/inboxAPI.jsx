import axios from 'axios';

let userToken;

if (localStorage.getItem('jwtToken')) {
  userToken = localStorage.getItem('jwtToken');
  
}


export const messagesAPI = (type) => axios(`https://andela-epic-mail.herokuapp.com/api/v2/messages/${type}`, {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
     token: userToken
  },
});

export const getSpecificMessageApi = (messageId) => axios(`https://andela-epic-mail.herokuapp.com/api/v2/messages/${messageId}`, {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
     token: userToken
}
})

export const sendMessage = (messageDetail) => axios('https://andela-epic-mail.herokuapp.com/api/v2/messages', {
  method: 'POST',
  data: messageDetail,
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
    token: userToken,
  },
});



