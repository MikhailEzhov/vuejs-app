import axios from "axios";

const API_URL = "http://localhost:4200/tasks";

export default {
  getAll() {
    return axios.get(API_URL);
  },

  get(id) {
    return axios.get(`${API_URL}/${id}`);
  },

  post(data) {
    return axios.post(API_URL, data);
  },

  put(id, data) {
    return axios.put(`${API_URL}/${id}`, data);
  },

  patch(id, data) {
    return axios.patch(`${API_URL}/${id}`, data);
  },

  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  },
};
