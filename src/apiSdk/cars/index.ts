import axios from 'axios';
import queryString from 'query-string';
import { CarInterface, CarGetQueryInterface } from 'interfaces/car';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCars = async (query?: CarGetQueryInterface): Promise<PaginatedInterface<CarInterface>> => {
  const response = await axios.get('/api/cars', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCar = async (car: CarInterface) => {
  const response = await axios.post('/api/cars', car);
  return response.data;
};

export const updateCarById = async (id: string, car: CarInterface) => {
  const response = await axios.put(`/api/cars/${id}`, car);
  return response.data;
};

export const getCarById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/cars/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCarById = async (id: string) => {
  const response = await axios.delete(`/api/cars/${id}`);
  return response.data;
};
