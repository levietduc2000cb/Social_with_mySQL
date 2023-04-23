import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db from "../configs/connectDB.js";

export const login = async (req, res) => {
  let q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0)
      return res.status(409).json("Wrong password or email");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword) return res.status(400).json("Wrong password or email");
    const { password, ...other } = data[0];

    const token = jwt.sign({ id: data[0].id }, "shhhhh");

    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json(other);
  });
};

export const register = (req, res) => {
  //CHECK USER IF EXISTS

  let q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("Email already exists!");
    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";

    const values = [req.body.name, req.body.email, hashedPassword];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User logged out");
};
