import axios from "axios";

// const url = "http://localhost:3002/users";
const url = "http://localhost:8000/user";

export const getUsers = async (id) => {
  id = id || "";
  return await axios.get(`${url}/${id}`);
};
export const getAddUsers = async (user) => {
  return await axios.post(`${url}/add`, user);
};
export const editUser = async (id, user) => {
  return await axios.put(`${url}/${id}`, user);
};
export const deleteData = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
