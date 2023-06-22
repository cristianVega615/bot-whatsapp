const express = require("express");
const { config } = require("dotenv");
const app = express();

config();



/**
 * 
 * !Socket
 */
const socket = require("./config/socket");

const PORT = process.env.PORT_SERVER || 3100;
process.on("warning", (e) => console.warn(e.stack));

app.listen(PORT, () => {
  console.log("servidor corriendo, servidor corriendo en:  " + PORT);
});
