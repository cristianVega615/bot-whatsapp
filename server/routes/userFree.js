const express = require("express");
const router = express.Router();
const { url_config } = require("../config.url");
const { isAuthenticate } = require("../middleware/authenticate");

router.post(`/bot-session`,isAuthenticate , (req,res) => {
    console.log(req.body)
    console.log(res.getHeader())
});

console.log(url_config.URL_dev)
module.exports = router