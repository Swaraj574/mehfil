import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import notFound from "./middleware/notFound.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

// =========================
// Global Middlewares
// =========================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(helmet());

app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// =========================
// Routes
// =========================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    app: "Mehfil API",
    version: "1.0.0",
    environment: process.env.NODE_ENV,
  });
});

// =========================
// 404 Middleware
// =========================

app.use(notFound);

// =========================
// Global Error Middleware
// =========================

app.use(errorMiddleware);

export default app;