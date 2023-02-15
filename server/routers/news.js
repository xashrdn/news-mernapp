const express = require("express");
const {
  readAllNews,
  readNews,
  updateNews,
  deleteAllNews,
  deleteNews,
  createNews,
} = require("../controllers/news");
const router = express.Router();

router.post("/news", createNews);
router.get("/newss", readAllNews);
router.get("/news/:id", readNews);
router.patch("/news/:id", updateNews);
router.delete("/newss/:userId", deleteAllNews);
router.delete("/news/:id", deleteNews);

module.exports = router;
