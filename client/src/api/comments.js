import { http } from "../service/http.service";

export const getComments = (postId) => {
  return http.get(`/comments/comments/${postId}`);
};

export const addComment = (body) => {
  return http.post("/comments/comment", body);
};
