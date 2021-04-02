import api from './api-config'

export const getAllPizzas = async () => {
  const resp = await api.get('/pizzas')
  return resp.data
}

export const getOnePizza = async (id) => {
  const resp = await api.get(`/pizzas/${id}`)
  return resp.data
}

export const postAPizza = async (pizzaData) => {
  const resp = await api.post(`/pizzas`, { pizza: pizzaData });
  return resp.data
}

export const putAPizza = async (id, pizzaData) => {
  const resp = await api.put(`/pizzas/${id}`, { pizza: pizzaData });
  return resp.data;
}

export const destroyPizza = async (id) => {
  const resp = await api.delete(`/pizzas/${id}`);
  return resp.data
}

