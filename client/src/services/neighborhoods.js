import api from './api-config';

export const getAllNeighborhoods = async () => {
  const resp = await api.get('/neighborhoods');
  return resp.data;
}

export const getOneNeighborhood = async (id) => {
  const resp = await api.get(`/neighborhods/${id}`)
  return resp.data
}

