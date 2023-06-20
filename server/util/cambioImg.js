const { watch } = require("fs");
const {constants, access} = require("node:fs/promises")
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

async function mainChangeImg(socket) {
  try {
    await access(PATH_QR, constants.F_OK);
    if (socket) {
      socket.emit("qr", base64())
      
    } 
  } catch (error) {
    console.log(error)  
  }
}

module.exports = {
  mainChangeImg,
  changeImg,
};
