/**
 * Load Module Dependencies
 *
 * exports.create(<Data>) instance | error
 * exports.getOne(<query>) instance | error
 * exports.getCollection(<query>) instance | error
 * exports.update(<query>,<updates>) instance | error
 * exports.remove(<query>) instance | error
 */
const Comment = require("../models/comment");


/**
 * Create an comment
 */
exports.create = async function(data) {
    let comment = await Comment.create(data);

    return comment;
};

/**
 * Fetch an comment
 * GET /comments/:id
 */
exports.getOne = async function(query) {
    let comment = await Comment.findOne(query);

    return comment;
};



/**
 * Fetch comments
 */
exports.getCollection = async function(query) {
    let comment = await Comment.find(query);

    return comment;
};

/**
 * Update an comment
 */
exports.update = async function(query, updates) {
    let comment = await Comment.update(query, updates);

    return comment;
};
/**
 * Remove an comment
 */
exports.remove = async function(query) {
    let comment = await Comment.deleteOne(query);

    return comment;
};
