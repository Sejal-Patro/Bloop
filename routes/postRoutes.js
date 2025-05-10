import express from "express";
import {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
  likePost
} from "../controllers/postController.js";

import multer from 'multer';
import path from 'path';
const router = express.Router();

// Image storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Routes
router.get("/", getAllPosts);
router.post("/create", upload.single('image'), createPost); // supports text + optional image
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.post("/:id/like", likePost);

export default router; 