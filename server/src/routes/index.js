import express from "express";
import authRoute from "./auth.route.js";
import commentsRoute from "./comments.route.js";
import likesRoute from "./likes.route.js";
import postsRoute from "./posts.route.js";
import usersRoute from "./users.route.js";
import relationsRoute from "./relations.route.js";

const runRoutes = (app) => {
  app.use("/api/v1/auth", authRoute);
  app.use("/api/v1/comments", commentsRoute);
  app.use("/api/v1/likes", likesRoute);
  app.use("/api/v1/posts", postsRoute);
  app.use("/api/v1/users", usersRoute);
  app.use("/api/v1/relations", relationsRoute);
};

export default runRoutes;
