/**
 * Load Module Dependencies
 * /authors
 *  - Get /:id
 *  - Post /
 *  - Put /:id
 *  - Delete /:id
 */
const express = require("express");

const authorController = require("../controllers/author");

const router = express.Router();


router.post("/", authorController.create);

router.get("/", authorController.getCollection);

router.get("/:id", authorController.getAuthor);

router.put("/:id", authorController.update);

router.delete("/:id", authorController.remove);


// Expose the Router
module.exports = router;