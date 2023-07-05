const { url_config } = require("../config.url");
const isAuthenticate = (req, res, next) => {
  if (req.session.authenticate) {
    console.log("pasa por aca");
    next();
  } else {
    console.log(res.getHeaders())
    res.redirect("localhost:3200");
  }
};

module.exports = {
  isAuthenticate,
};
