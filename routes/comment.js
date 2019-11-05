/**
 * Load Module Dependencies
 * /comments
 *  - Get /:id
 *  - Post /
 *  - Put /:id
 *  - Delete /:id
 */
const express = require("express");

const commentController = require("../controllers/comment");

const router = express.Router();


router.post("/", commentController.create);

router.get("/", commentController.getCollection);

router.get("/:id", commentController.getComment);

router.put("/:id", commentController.update);

router.delete("/:id", commentController.remove);


// Expose the Router
module.exports = router;