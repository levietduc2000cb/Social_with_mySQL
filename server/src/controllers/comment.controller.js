import db from "../configs/connectDB.js";
import moment from "moment";

export const getComments = async (req, res, next) => {
  let q =
    "SELECT u.username,u.avatar,c.* FROM users AS u INNER JOIN (SELECT * FROM comments WHERE postId = ?) AS c ON u.id = c.commentUser";

  db.query(q, [req.params.postId], (err, result) => {
    if (err) return res.status(400).json("Comments is failure");
    if (result.length === 0) return res.status(200).json([]);
    return res.status(200).json(result);
  });
};

export const addComment = async (req, res, next) => {
  console.log("Run create comment");

  const createAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  let q =
    "INSERT INTO comments (`commentUser`,`textComment`,`postId`,`createAt`) values (?)";
  let value = [req.body.userId, req.body.comment, req.body.postId, createAt];

  db.query(q, [value], (err, result) => {
    if (err) return res.status(500).json("Comment not create success");
    return res.status(200).json("Comment create success");
  });
};
