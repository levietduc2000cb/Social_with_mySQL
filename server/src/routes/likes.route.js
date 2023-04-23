import express from "express";
const Route = express.Router();
import {
  getLikes,
  addLike,
  deleteLike,
} from "../controllers/like.controller.js";
import verifyToken from "../middleware/verifyToken.js";

Route.get("/likes/:postId", verifyToken, getLikes);
Route.post("/like", verifyToken, addLike);
Route.delete("/like/:postId", verifyToken, deleteLike);

export default Route;
