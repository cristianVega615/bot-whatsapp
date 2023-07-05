const { addKeyword } = require("@bot-whatsapp/bot");
const { watchFile } = require("fs");
const {Socket} = require('socket.io')



const path = require("path");
const PATH_FLOWS = path.join(
  __dirname +
    ".\\..\\flows-json\\user-430ac67f-a2a7-4c41-943f-4512823f3196.json"
);

module.exports = {
  flows: [],
};
