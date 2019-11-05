/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const Article = require("../models/article");


/**
 * Create an article
 */
exports.create = async function(data) {
  let article = await Article.create(data);

  return article;
}

/**
 * Fetch an article
 * GET /articles/:id
 */
exports.getOne = async function(query) {
  let article = await Article.findOne(query);

  return article;
};


/**
 * Fetch articles
 */
exports.getCollection = async function(query) {
  let article = await Article.find(query);

  return article;
};

/**
 * Update an article
 */
exports.update = async function(query, updates) {
  let article = await Article.update(query, updates);

  return article;
};
/**
 * Remove an article
 */
exports.remove = async function(query) {
  let article = await Article.deleteOne(query);

  return article;
};
