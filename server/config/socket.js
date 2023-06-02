const express = require("express");
const { config } = require("dotenv");
const { Server } = require("socket.io");
const { changeImg, mainChangeImg } = require("../util/cambioImg");

//* Configuración para poder tener las varaibles de entorno
config();

const app = express();
const { createServer } = require("http");
const server_socket = createServer(app);
const io = new Server(server_socket, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // console.log("conectado");
  //! Funciones que evaluan cuando actuar y enviar el event socket.
  mainChangeImg(socket)
  changeImg(socket)

});

console.log(process.env.PORT_SOCKET);

const PORT_SOCKET = process.env.PORT_SOCKET || 4000;
server_socket.listen(PORT_SOCKET);
