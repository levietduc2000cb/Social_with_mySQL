import db from "../configs/connectDB.js";

export const getLikes = async (req, res, next) => {
  let q = "SELECT * FROM likes WHERE postLike = ?";

  db.query(q, [req.params.postId], (err, result) => {
    if (err) return res.status(500).json("Can not get likes");
    if (result.length === 0) return res.status(200).json([]);
    const like = result.some((like) => like.userLike === req.body.userId);
    return res.status(200).json({ result, like: like });
  });
};

export const addLike = async (req, res, next) => {
  let q = "INSERT INTO likes (`postLike`,`userLike`) values (?)";
  let value = [req.body.postId, req.body.userId];

  db.query(q, [value], (err, result) => {
    if (err) return res.status(500).json("Create like failure");
    return res.status(200).json("Create like success");
  });
};

export const deleteLike = async (req, res, next) => {
  let q = "DELETE FROM likes WHERE userLike=? AND postLike = ?";
  db.query(q, [req.body.userId, req.params.postId], (err, result) => {
    if (err) return res.status(500).json("Can not delete like");
    return res.status(200).json("Delete like success");
  });
};
