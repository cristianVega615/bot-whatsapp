const express = require("express");
const router = express.Router();
const { url_config } = require("../config.url");
const { isAuthenticate } = require("../middleware/authenticate");

router.get(`/bot-session`, isAuthenticate, (req, res) => {
  console.log(req.body);
  console.log(req.session);
  res.send({
    user: req.session.user,
    auth: req.session.authenticate,
  });
});

router.post("/bot-session", (req, res, next) => {
  const { user } = req.body;
  console.log(user);
  req.session.user = user;
  req.session.authenticate = true;
  req.session.type = "with"
  res.status(200).send(true);
});

console.log(url_config.URL_dev);
module.exports = router;
