const { url_config } = require("../config.url");
const isAuthenticate = (req, res, next) => {
  if (req.session.authenticate) {
    console.log("pasa por aca");
    next();
  } else {
    req.session.authenticate = false
    next()
  }
};

module.exports = {
  isAuthenticate,
};
