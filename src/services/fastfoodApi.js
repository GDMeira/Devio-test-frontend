import api from './api';

export async function getProducts() {
  const response = await api.get('/products');

  return response.data;
}

export async function getExtras() {
  const response = await api.get('/extras');

  return response.data;
}
