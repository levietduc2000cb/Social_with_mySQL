import db from "../cONfigs/cONnectDB.js";
import moment from "moment";

export const getPosts = async (req, res, next) => {
  // Query posts in user and followed
  const { userId } = req.query;
  let p =
    "SELECT u.username, u.avatar,p.* FROM users AS u INNER JOIN (SELECT * FROM posts WHERE userId IN (SELECT followedUser FROM relations WHERE followerUser = ?) or userId = ?) AS p ON u.id = p.userId order by p.createAt desc";
  let value = [req.body.userId, req.body.userId];
  if (userId) {
    p =
      "SELECT u.username,u.avatar,p.* FROM users AS u INNER JOIN posts AS p ON u.id=p.userId WHERE p.userId = ? order by p.createAt desc";
    value = [userId];
  }
  db.query(p, value, (err, result) => {
    if (err) return res.status(400).json("Posts error");
    if (result.length === 0) return res.status(200).json("Posts not found");
    return res.status(200).json(result);
  });
};

export const addPost = async (req, res) => {
  console.log(req.body);
  //Create time now
  const createAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
  // Query add posts to posts
  const p = "INSERT INTO posts (`userId`,`text`,`img`,`createAt`) VALUES (?)";
  let value = [req.body.userId, req.body.text, req.body.img, createAt];
  db.query(p, [value], (err, result) => {
    if (err) return res.status(400).json("Add post error");
    return res.status(200).json("Add post success");
  });
};
