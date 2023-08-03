const express = require("express");
const router = express.Router();
const urlRoute = require("./url.route");


// default route to make sure , it works.
router.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    status: 200,
    message: "It works!",
    data: {}
  });
});

router.use("/api/url", urlRoute) //url routes
module.exports = router;