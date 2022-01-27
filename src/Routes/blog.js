const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const blogController = require("../controllers/blog");

router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("Min 5 Character for Title"),
    body("body").isLength({ min: 5 }).withMessage("Min 5 Character for Body"),
  ],
  blogController.createBlogPost
);

module.exports = router;
