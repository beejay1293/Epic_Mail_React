import axios from 'axios';

const authAPI = (type, user) => axios(`https://andela-epic-mail.herokuapp.com/api/v2/auth/${type}`, {
  method: 'POST',
  data: user,
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json; charset=UTF-8',
  },
});


export default authAPI;
