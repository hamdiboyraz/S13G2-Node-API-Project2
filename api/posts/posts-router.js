// posts için gerekli routerları buraya yazın
const express = require("express");
const postsController = require("./posts-model");

// Create a router object
const postsRouter = express.Router();

// Define the routes for the posts API
postsRouter.get("/", async (req, res) => {
  try {
    const posts = await postsController.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Gönderiler alınamadı" });
  }
});
postsRouter.post("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "" });
  }
});
postsRouter.get("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "" });
  }
});
postsRouter.put("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "" });
  }
});
postsRouter.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "" });
  }
});
postsRouter.get("/:id/comments", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "" });
  }
});

// Export the router object
module.exports = postsRouter;
