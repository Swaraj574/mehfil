import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";

export const protect = asyncHandler(async (req, res, next) => {

  let token;

  // Authorization: Bearer <token>
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new AppError("Not authorized. No token provided.", 401);
  }

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET
  );


  const user = await User.findById(decoded.id);

  if (!user) {
    throw new AppError("User no longer exists.", 401);
  }

  req.user = user;

  next();
});

