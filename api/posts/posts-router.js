// posts için gerekli routerları buraya yazın
const express = require("express");
const postsRouter = express.Router();

// Routes
postsRouter.get("/", (req, res) => {});
postsRouter.post("/", (req, res) => {});
postsRouter.get("/:id", (req, res) => {});
postsRouter.put("/:id", (req, res) => {});
postsRouter.delete("/:id", (req, res) => {});
postsRouter.get("/:id/comments", (req, res) => {});

module.exports = postsRouter;
