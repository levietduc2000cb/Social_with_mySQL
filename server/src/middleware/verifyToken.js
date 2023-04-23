import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  // Verify token
  const token = req.cookies.accessToken;
  try {
    const userId = jwt.verify(token, "shhhhh");
    req.body.userId = userId.id;
    return next();
  } catch (error) {
    return res.status(400).json("Authentication failed");
  }
};

export default verifyToken;
