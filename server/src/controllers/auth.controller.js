import asyncHandler from "../utils/asyncHandler.js";
import generateToken from "../utils/generateToken.js";
import { createUser } from "../services/auth.service.js";
import { successResponse } from "../helpers/apiResponse.js";
import { loginUser } from "../services/auth.service.js";
import { logoutUser } from "../services/auth.service.js";

export const register = asyncHandler(async (req, res) => {
  console.log("========== REGISTER START ==========");
  console.log("Request Body:", req.body);

  const user = await createUser(req.body);
  console.log("✅ User Created:", user);

  const token = generateToken(user._id);
  console.log("✅ Token Generated");

  user.password = undefined;

  console.log("✅ Sending Response");

  successResponse(
    res,
    {
      user,
      token,
    },
    "Registered successfully",
    201
  );
});
export const login = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  const user = await loginUser(email, password);

  const token = generateToken(user._id);

  user.password = undefined;

  successResponse(
    res,
    {
      user,
      token,
    },
    "Login successful"
  );
});
// return user.request
export const getCurrentUser = asyncHandler(async (req, res) => {

  successResponse(
    res,
    {
      user: req.user,
    },
    "Current user fetched successfully"
  );

});
// req.user protect middleware
export const logout = asyncHandler(async (req, res) => {

  await logoutUser(req.user._id);

  successResponse(
    res,
    {},
    "Logged out successfully"
  );

});