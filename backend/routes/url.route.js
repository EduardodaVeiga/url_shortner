const express = require("express");
const router = express.Router();
const UrlController = require('../controllers/url/url.controller');

router.post(
    "/shorten",
    UrlController.shortenURL
)

router.get(
    "/:id",
    UrlController.redirectURL
)

module.exports = router;