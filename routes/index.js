/**
 * Load Module Dependencies
 */
const express = require("express");

const article = require("./article");
const author = require("./author");
const comment = require("./comment");

module.exports = function appRouter(app) {
  app.use("/articles", article);
  app.use("/comments", comment);
  app.use("/authors", author);
};