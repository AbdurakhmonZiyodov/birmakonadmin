import $api from '../api';
const porfile = {
  profileGet: () => $api.get('/dashboard/profile'),
  profileUpdate: (data: any) => $api.post('/dashboard/profile/update', data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }),
  shopGet: () => $api.get('/dashboard/shop'),
  shopUpdate: (data: any) => $api.post("/dashboard/shop/update", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
};

export default porfile;
