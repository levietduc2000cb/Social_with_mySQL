import { http } from "../service/http.service";

export const getLikes = (postId) => {
  return http.get(`/likes/likes/${postId}`);
};

export const addLike = (body) => {
  return http.post("/likes/like", body);
};

export const deleteLike = (postId) => {
  return http.delete(`/likes/like/${postId}`);
};
