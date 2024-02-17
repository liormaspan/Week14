import express from "express";
import {
  _getAllPosts,
  _search4Id,
  __newPost,
} from "../controllers/PostsController.js";

const router = express.Router();

router.get("/posts", _getAllPosts);
router.get("/posts/:id", _search4Id);
router.post("/posts", _newPost);

export default router;