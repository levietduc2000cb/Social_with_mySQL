import express from "express";
const Route = express.Router();
import verifyToken from "../middleware/verifyToken.js";
import { getPosts, addPost } from "../controllers/post.controller.js";

Route.get("/posts", verifyToken, getPosts);
Route.post("/post", verifyToken, addPost);

export default Route;
