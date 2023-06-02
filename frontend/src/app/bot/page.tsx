"use client";
import io from "socket.io-client";
import { FormEvent, FormEventHandler, useEffect, useRef, useState } from "react";
import { socketInitiazize } from "./utils-socket/socket";
import Image from 'next/image'

export default function Bot() {
  const [Qr, setQr] = useState("");
  const socket = socketInitiazize();

  socket.on('qr', (msg) => {
    setQr(`data:image/jpeg;base64,${msg}`)
    console.log(Qr)
  })
  return (
    <div>
      <Image src={Qr} alt="qr" width={500} height={500}/>
    </div>
  );
}
