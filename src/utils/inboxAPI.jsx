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


