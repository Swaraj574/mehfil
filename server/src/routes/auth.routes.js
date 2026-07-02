import express from "express";

import {
  register,
  login,
  logout,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";

import validate from "../middleware/validate.js";
import { protect } from "../middleware/auth.middleware.js";

// NEW IMPORTS
import authorize from "../middleware/authorize.middleware.js";
import { ROLES } from "../constants/roles.js";

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post(
  "/register",
  registerValidator,
  validate,
  register
);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post(
  "/login",
  loginValidator,
  validate,
  login
);

/**
 * @route   GET /api/auth/me
 * @desc    Get currently logged in user
 * @access  Private
 */
router.get(
  "/me",
  protect,
  getCurrentUser
);

/**
 * @route   POST /api/auth/logout
 * @desc    Logout current user
 * @access  Private
 */
router.post(
  "/logout",
  protect,
  logout
);

/**
 * @route   GET /api/auth/admin-test
 * @desc    Test admin authorization
 * @access  Admin Only
 */
router.get(
  "/admin-test",
  protect,
  authorize(ROLES.ADMIN),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Admin",
    });
  }
);

export default router;