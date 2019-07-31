import axios from 'axios';

const baseUrl = 'https://andela-epic-mail.herokuapp.com'

const authAPI = (type, user) => axios(`${baseUrl}/api/v2/auth/${type}`, {
  method: 'POST',
  data: user,
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
  },
});


export default authAPI;
