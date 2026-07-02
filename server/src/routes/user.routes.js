import express from "express";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected profile route",
    data: {
      user: req.user,
    },
  });
});

export default router;