import db from "../configs/connectDB.js";

export const getUser = async (req, res, next) => {
  let myUser =
    Number(req.body.userId) === Number(req.params.userId) ? true : false;
  let q =
    "SELECT id,username,avatar,avatarBackground,location,website FROM users WHERE id=?";
  db.query(q, [req.params.userId], (err, result) => {
    if (err) return res.status(400).json("Can not get user");
    return res.status(200).json({ result: result[0], myUser: myUser });
  });
};

export const updateUser = async (req, res, next) => {
  let q =
    "UPDATE users SET `username`=?,`avatar`=?,`location`=?,`website`=? WHERE id=?";
  db.query(
    q,
    [
      req.body.name,
      req.body.avatar,
      req.body.location,
      req.body.website,
      req.body.userId,
    ],
    (err, result) => {
      if (err) return res.status(400).json("Can not update user");
      if (result.affectedRows > 0) return res.status(200).json("Updated");
      return res.status(400).json("Not updated");
    }
  );
};
