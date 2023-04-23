import express from "express";
const Route = express.Router();
import verifyToken from "../middleware/verifyToken.js";
import { getComments, addComment } from "../controllers/comment.controller.js";

Route.get("/comments/:postId", verifyToken, getComments);
Route.post("/comment", verifyToken, addComment);

export default Route;
