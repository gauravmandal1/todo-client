import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; 

export const createTask = (task) => {
  return axios.post(`${API_BASE_URL}/task`, task);
};

export const updateTask = (id, updatedTask) => {
  console.log(10,id,updateTask)
  return axios.patch(`${API_BASE_URL}/task/${id}`, updatedTask);
};


export const deleteTask = (id) => {
  return axios.delete(`${API_BASE_URL}/tasks/${id}`);
};

export const getTasks = () => {
  return axios.get(`${API_BASE_URL}/task/getallTask`);
};