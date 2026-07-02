import User from "../models/user.model.js";
import AppError from "../utils/AppError.js";
import generateUsername from "../utils/generateUsername.js";

// ========================
// Register User
// ========================
export const createUser = async ({ fullName, email, password }) => {

  // Check email
  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    throw new AppError("Email already registered", 409);
  }

  // Generate username
  let username = generateUsername(fullName);

  // Ensure username is unique
  while (await User.findOne({ username })) {
    username = generateUsername(fullName);
  }

  const user = await User.create({
    fullName,
    email,
    password,
    username,
  });

  return user;
};

// ========================
// Login User
// ========================
export const loginUser = async (email, password) => {

  // Find user and include password
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  // Compare password
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  return user;
};

// ========================
// Logout User
// ========================
export const logoutUser = async (userId) => {

  await User.findByIdAndUpdate(userId, {
    refreshToken: null,
  });

  return true;
};