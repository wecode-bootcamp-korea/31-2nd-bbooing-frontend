export const BASE_URL = 'http://10.58.6.19:8000';
export const API = {
  login: `${BASE_URL}/users/signin`,
  join: `${BASE_URL}/users/kakao-login`,
  product: `${BASE_URL}/product`,
  products: `${BASE_URL}/products`,
  carts: `${BASE_URL}/carts/like`,
};

export default API;
