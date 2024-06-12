const express = require('express');
const postsController = require('../controllers/post.controller');

const router = express.Router();

router.post("/", postsController.save);
router.get("/", postsController.show);
router.patch("/:id", postsController.update); 

module.exports = router;

