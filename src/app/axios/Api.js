import axios from 'axios'
import { getCookie } from './CookieConfig'

const instance = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://jrugs.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

// ------------------ User -----------------------

// const signUp = (payload) => {
//   return apiClient.post('/users/signup', payload);
// };
// const login = (payload) => {
//   return apiClient.post('/users/login', payload);
// };
// const forgotPassword = (payload) => {
//   return apiClient.post('/users/forgot_password', payload);
// };
// const resetPassword = (token, password) => {
//   return apiClient.patch(`/users/reset_password/${token}`, {
//     password,
//   });
// };

// const renewAccessToken = () => {
//   return apiClient.get('/users/renew_token');
// };
// const getMyProfile = () => {
//   return apiClient.get('/users/profiles/my');
// };
// const logout = () => {
//   return apiClient.delete('/users/logout');
// };

// // ******************************product*****************************
// const getPublicProduct = () => {
//   return apiClient.get('/products/public?limit=10');
// };

// const getOneProduct = (id) => {
//   return apiClient.get(`/products/public/${id}`);
// };

// // ***************************cart*****************************************
// const addToCart = (payload) => {
//   return apiClient.post('/carts', payload);
// };
// const myCart = () => {
//   return apiClient.get('/carts/my');
// };
// const removeCart = (id) => {
//   return apiClient.delete(`/carts/${id}`);
// };
// // ******************************wishList************************
// const wishList = (payload) => {
//   return apiClient.post('/wishlists', payload);
// };
// const myWishList = () => {
//   return apiClient.get('/wishlists/my');
// };
// const removeWishList = (id) => {
//   return apiClient.delete(`/wishlists/${id}`);
// };
// // *******************Address*********************************
// const address = (payload) => {
//   return apiClient.post('/address', payload);
// };
// const myAddress = () => {
//   return apiClient.get('/address/my');
// };

// const deleteAddress = (id) => {
//   return apiClient.delete(`/address/${id}`);
// };

// const editAddress = (id, payload) => {
//   return apiClient.patch(`/address/${id}`, payload);
// };
// // ***************category*******************************
// const getCategory = (id) => {
//   return apiClient.patch(`/address/${id}`);
// };
// const getListCategory = () => {
//   return apiClient.get(/categories/list);
// };

// // ******************order**************************
// const getMyOrder = () => {
//   return apiClient.get("/orders/my?limit=10");
// };
// const getMyOneOrder = (id) => {
//   return apiClient.get(`/orders/my/${id}`);
// };
// const orderFromCart = (payload) => {
//   return apiClient.post('/orders/cart', payload);
// };
// const orderNow = (payload) => {
//   return apiClient.post('/orders/now', payload);
// };

// // ************************tag***************************************
// const tagsList = () => {
//   return apiClient.get('/tags');
// };

function setToken(token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${getCookie(
    token
  )}`
}

export {
  instance,
  setToken,
  // signUp,
  // login,
  // forgotPassword,
  // resetPassword,
  // renewAccessToken,
  // getMyProfile,
  // logout,
  // getPublicProduct,
  // getOneProduct,
  // addToCart,
  // myCart,
  // wishList,
  // myWishList,
  // removeWishList,
  // removeCart,
  // address,
  // myAddress,
  // deleteAddress,
  // editAddress,
  // getListCategory,
  // getMyOrder,
  // getMyOneOrder,
  // orderFromCart,
  // orderNow,
  // tagsList,
}
