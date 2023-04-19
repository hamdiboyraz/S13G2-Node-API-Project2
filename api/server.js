// server için gerekli olanları burada ayarlayın

// posts router'ını buraya require edin ve bağlayın
const express = require("express");
const postsRouter = require("./posts/posts-router");
// INSTANCE OF EXPRESS.JS
const server = express();
// GLOBAL MIDDLEWARE
server.use(express.json());

// API
server.use("/api/posts", postsRouter);
// EXPORT
module.exports = server;
