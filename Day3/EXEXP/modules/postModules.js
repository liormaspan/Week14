import { db } from "../config/db.js";

// GET ALL POSTS
export const getAllPosts = () => {
  return db("posts").select("id", "title", "content");
};

// GET /posts/:id: Retusrn a specific blog post based on its id.
export const search4Id = (id) => {
  return db("posts").select("id", "title", "content").where({ id: id });
};
// POST /posts: Create a new blog post.
export const newPost = (id) => {
  return db("posts").select("id", "title", "content");
};