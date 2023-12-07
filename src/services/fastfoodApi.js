import api from './api';

export async function getProducts() {
  const response = await api.get('/products');

  return response.data;
}

export async function getExtras() {
  const response = await api.get('/extras');

  return response.data;
}

export async function getOrderCode() {
  const response = await api.get('/orders/code');

  return response.data;
}

export async function postOrder(order) {
  const response = await api.post('/orders', order);

  return response.data;
}

export async function getOrders() {
  const response = await api.get('/orders');

  return response.data;
}