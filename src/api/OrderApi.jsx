

import axios from 'axios';

const baseUrl = "http://localhost:4000/api/order";

export const getAllOrders = (pageNum, limit) => {
    return axios.get(`${baseUrl}/?page=${pageNum}&limit=${limit}`);
};

export const getOrderById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
};

export const deleteOrderById = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};

export const addOrder = (orderData) => {
    return axios.post(baseUrl, orderData);
};

export const updateOrder = (id, updatedData) => {
    return axios.put(`${baseUrl}/${id}`, updatedData);
};

export const totalOrderPages = (limit) => {
    return axios.get(`${baseUrl}/total/?limit=${limit}`);
};