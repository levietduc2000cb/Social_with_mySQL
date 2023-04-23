import express from "express";
const Route = express.Router();
import veifyToken from "../middleware/verifyToken.js";
import { getUser, updateUser } from "../controllers/user.controller.js";

Route.get("/user/:userId", veifyToken, getUser);
Route.post("/user", veifyToken, updateUser);

export default Route;
