// posts için gerekli routerları buraya yazın
const express = require("express");
const postsController = require("./posts-model");

// Create a router object
const postsRouter = express.Router();

// Define the routes for the posts API
// Get All Posts
postsRouter.get("/", async (req, res) => {
  try {
    const posts = await postsController.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Gönderiler alınamadı" });
  }
});

// Create Post
postsRouter.post("/", async (req, res) => {
  try {
    //console.log(req.body);
    const { title, contents } = req.body;
    if (!title || !contents) {
      return res.status(400).json({
        message: "Lütfen gönderi için bir title ve contents sağlayın",
      });
    }
    const { id } = await postsController.insert({ title, contents }); // newPost id
    const newPost = await postsController.findById(id);
    return res.status(201).json(newPost);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Veritabanına kaydedilirken bir hata oluştu" });
  }
});

// Get Post
postsRouter.get("/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const post = await postsController.findById(id);
    if (!post) {
      return res
        .status(404)
        .json({ message: "Belirtilen ID'li gönderi bulunamadı" });
    }
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Gönderi bilgisi alınamadı" });
  }
});

// Update Post
postsRouter.put("/:id", async (req, res) => {
  try {
    //console.log(req.body);
    const { title, contents } = req.body;
    // console.log(req.params);
    const { id } = req.params;

    if (!title || !contents) {
      return res.status(400).json({
        message: "Lütfen gönderi için bir title ve contents sağlayın",
      });
    }

    const post = await postsController.findById(id);
    if (!post) {
      return res
        .status(404)
        .json({ message: "Belirtilen ID'li gönderi bulunamadı" });
    }
    await postsController.update(id, { title, contents });
    const updatedPost = await postsController.findById(id);
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Gönderi bilgileri güncellenemedi" });
  }
});

// Delete Post
postsRouter.delete("/:id", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const post = await postsController.findById(id);
    if (!post) {
      return res
        .status(404)
        .json({ message: "Belirtilen ID'li gönderi bulunamadı" });
    }
    await postsController.remove(id);
    // res.status(204).send()
    // res.status(200).json({ message: "Gönderi başarıyla silindi" });
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Gönderi silinemedi" });
  }
});

// Get Comments by postID
postsRouter.get("/:id/comments", async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const post = await postsController.findById(id);
    if (!post) {
      return res
        .status(404)
        .json({ message: "Belirtilen ID'li gönderi bulunamadı" });
    }
    const comments = await postsController.findPostComments(id);
    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Yorumlar bilgisi getirilemedi" });
  }
});

// Export the router object
module.exports = postsRouter;
