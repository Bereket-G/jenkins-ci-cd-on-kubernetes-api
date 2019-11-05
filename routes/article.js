/**
 * Load Module Dependencies
 * /articles
 *  - Get /:id
 *  - Post /
 *  - Put /:id
 *  - Delete /:id
 */
const express = require("express");

const articleController = require("../controllers/article");

const router = express.Router();


router.post("/", articleController.create);

router.get("/", articleController.getCollection);

router.get("/:id", articleController.getArticle);

router.put("/:id", articleController.update);

router.delete("/:id", articleController.remove);


// Expose the Router
module.exports = router;