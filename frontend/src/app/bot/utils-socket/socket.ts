

import io, { Socket } from "socket.io-client";

function socketInitiazize(): Socket {
  const socket = io("http://localhost:4120");
  return socket;
}

export { socketInitiazize };
