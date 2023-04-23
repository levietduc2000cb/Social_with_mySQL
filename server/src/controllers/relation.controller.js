import db from "../configs/connectDB.js";

export const checkFollow = async (req, res, next) => {
  let p = "SELECT * FROM relations WHERE followerUser=? AND followedUser=?";
  db.query(p, [req.body.userId, req.params.userId], (err, result) => {
    if (err) return res.status(500).json("Can not get follow");
    return res.status(200).json(result.length === 0 ? false : true);
  });
};

export const addFollow = async (req, res, next) => {
  let p = "INSERT INTO relations (`followerUser`,`followedUser`) VALUES (?)";
  let value = [req.body.userId, req.body.userIdFollow];
  db.query(p, [value], (err, result) => {
    if (err) return res.status(500).json("Can not follow");
    return res.status(200).json("Followed");
  });
};

export const deleteFollow = async (req, res, next) => {
  let p = "DELETE FROM relations WHERE followerUser=? AND followedUser=?";
  db.query(p, [req.body.userId, req.params.userId], (err, result) => {
    if (err) return res.status(500).json("Can not delete follow");
    return res.status(200).json("Unfollowed");
  });
};

export const notFollow = async (req, res, next) => {};
