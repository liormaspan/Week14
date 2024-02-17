import { getAllPosts, search4Id } from "../models/PostsModels.js";

export const _getAllPosts = async (req, res) => {
  try {
    const response = await getAllPosts();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "You got lost" });
  }
};


export const _search4Id = async (req, res) => {
  try {
    const response = await search4Id(req.params.id);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "I cant find the specifec post" });
  }
};


export const _newPost = async (req, res) => {
  const postData = req.body;
  try {
    const response = await db("'posts").insert(postData);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json({ messege: "Sorry could not enter the data" });
  }
};