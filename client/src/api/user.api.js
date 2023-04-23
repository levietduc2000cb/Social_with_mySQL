import { http } from "../service/http.service";

export const getUser = (userId) => {
  return http.get(`users/user/${userId}`);
};

export const updateUser = (body) => {
  return http.post("users/user", body);
};
