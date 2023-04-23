import { http } from "../service/http.service";

export const uploadFile = (file) => {
  let formData = new FormData();
  formData.append("file", file);
  return http.post("/upload", formData);
};
