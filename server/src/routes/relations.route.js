import express from "express";
const Route = express.Router();
import veifyToken from "../middleware/verifyToken.js";
import {
  checkFollow,
  addFollow,
  deleteFollow,
  notFollow,
} from "../controllers/relation.controller.js";
import verifyToken from "../middleware/verifyToken.js";

Route.get("/relation/:userId", veifyToken, checkFollow);
Route.post("/relation", veifyToken, addFollow);
Route.delete("/relation/:userId", veifyToken, deleteFollow);
Route.get("/relation/notfollow", verifyToken, notFollow);

export default Route;
