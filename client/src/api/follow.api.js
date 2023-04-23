import { http } from "../service/http.service";

export const checkFollow = (userId) => {
  return http.get(`/relations/relation/${userId}`);
};

export const addFollow = (body) => {
  return http.post("/relations/relation", body);
};
export const deleteFollow = (userId) => {
  return http.delete(`/relations/relation/${userId}`);
};

export const notFollow = () => {};
