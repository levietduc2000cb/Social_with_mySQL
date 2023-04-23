import axios from "axios";

export const ApiLogin = (body) => {
  return axios.post("http://localhost:5000/api/v1/auth/login", body, {
    withCredentials: true,
  });
};

export const ApiRegister = (body) => {
  return axios.post("http://localhost:5000/api/v1/auth/register", body);
};

export const ApiLogout = () => {
  return axios.post("http://localhost:5000/api/v1/auth/logout");
};
