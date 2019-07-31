import axios from 'axios';

let userToken;

if (localStorage.getItem('jwtToken')) {
  userToken = localStorage.getItem('jwtToken');
  
}

const baseUrl = 'https://andela-epic-mail.herokuapp.com'


export const messagesAPI = (type) => axios(`${baseUrl}/api/v2/messages/${type}`, {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
     token: localStorage.getItem('jwtToken')
  },
});

export const getSpecificMessageApi = (messageId) => axios(`${baseUrl}/api/v2/messages/${messageId}`, {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
     token: localStorage.getItem('jwtToken')
}
})

export const sendMessage = (messageDetail) => axios(`${baseUrl}/api/v2/messages`, {
  method: 'POST',
  data: messageDetail,
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
    token: localStorage.getItem('jwtToken')
  },
});

export const deleteMessage = (id) => axios(`${baseUrl}/api/v2/messages/${id}`, {
  method: 'DELETE',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
    token: userToken = localStorage.getItem('jwtToken')
  }
})




