import $api from '../api';

const auth = {
  login: (data: any) => $api.post('/dashboard/auth', data),
};

export default auth;
