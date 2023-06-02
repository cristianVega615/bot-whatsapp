const fs = require("fs");
const PATH_QR = __dirname + ".\\..\\bot.qr.png";

function base64() {
  const imgData = fs.readFileSync(PATH_QR);
  const base64Img = imgData.toString("base64");

  return base64Img;
}

module.exports = {
  base64,
};
