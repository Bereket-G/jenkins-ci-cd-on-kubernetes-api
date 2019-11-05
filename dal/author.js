/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const Author = require("../models/author");


/**
 * Create an author
 */
exports.create = async function(data) {
  let author = await Author.create(data);

  return author;
};

/**
 * Fetch an author
 * GET /authors/:id
 */
exports.getOne = async function(query) {
  let author = await Author.findOne(query);

  return author;
};



/**
 * Fetch authors
 */
exports.getCollection = async function(query) {
  let author = await Author.find(query);

  return author;
};

/**
 * Update an author
 */
exports.update = async function(query, updates) {
  let author = await Author.update(query, updates);

  return author;
};
/**
 * Remove an author
 */
exports.remove = async function(query) {
  let author = await Author.deleteOne(query);

  return author;
};
