import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { ROLES } from "../constants/roles.js";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 2,
      maxlength: 60,
    },

    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
      maxlength: 300,
    },

    location: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.USER,
    },

    stats: {
      followers: {
        type: Number,
        default: 0,
      },

      following: {
        type: Number,
        default: 0,
      },

      poems: {
        type: Number,
        default: 0,
      },

      collections: {
        type: Number,
        default: 0,
      },
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    refreshToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare entered password with hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;