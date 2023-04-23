import { http } from "../service/http.service";

export const getPosts = (userId) => {
  if (userId) {
    return http.get(`/posts/posts?userId=${userId}`);
  } else {
    return http.get("/posts/posts");
  }
};
export const addPost = (body) => {
  return http.post("/posts/post", body);
};
