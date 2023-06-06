const { access, constants, watch } = require("fs");
const { base64 } = require("./imgToBase64");
const PATH_QR = __dirname + ".\\..\\bot.qr.png";

function changeImg(socket) {
  try {
    let changeValidation;
  
    watch(PATH_QR, (eventType, filename) => {
      if (filename && filename.endsWith(".png")) {
        changeValidation = true;
        setTimeout(() => {
          changeValidation = false;
        }, 5000);
        if (socket) {
          socket.emit("qr", base64());
        }
      }
    });
    
  } catch (error) {
    
  }
}

function mainChangeImg(socket) {
  access(PATH_QR, constants.F_OK, function (err) {
    if (err) {
      setTimeout(() => {
        if (socket) {
          socket.emit("qr", base64());
        }
      }, 10500);
    } else {
      if (socket) {
        socket.emit("qr", base64());
      }
    }
  });
}

module.exports = {
  mainChangeImg,
  changeImg,
};
