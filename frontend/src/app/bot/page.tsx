"use client";
import { useState, useEffect, useRef } from "react";
import { socketInitiazize } from "./utils-socket/socket";
import { blurQr } from "./image/blur.code";
import Image from "next/image";
import Footer from "@/components/Footer";
import FormBot from "@/components/bot-components/FormBot";
import {type flowsObject} from '@/interface/Interface.State'

export default function BotRoot() {
  const [Qr, setQr] = useState<string>("");
  const [flowsApper, setFlowsApper] = useState(false);
  const createflows = () => {
    setFlowsApper(!flowsApper);
  };
  
  useEffect(() => {
    const socket = socketInitiazize();
    socket.on("qr", (msg) => {
      setQr(`data:image/jpeg;base64,${msg}`);
    });

    const userFree = localStorage.getItem("user")
    if(!userFree) {
      localStorage.setItem("user", `user-${crypto.randomUUID()}`)
    }
   
    return () => {
      socket.disconnect()
    };
  }, []);

  return (
    <>
      <div className="w-full p-6">
        <h1 className="text-5xl font-extrabold text-center">Bot con QR</h1>
      </div>
      <main className="h-[63vh]">
        <Image
          className="m-auto"
          src={Qr}
          alt="qr"
          width={300}
          height={300}
          decoding="async"
          blurDataURL={blurQr}
          placeholder="blur"
          priority
        />
        <div className="w-full h-16 mt-4">
          <div className="flex p-7 justify-end">
            <button
              className="bg-slate-700 p-2 rounded-lg"
              onClick={createflows}
            >
              Nuevo Flujo
            </button>
          </div>
          <div className="">{
            flowsApper && <FormBot /> 
          }</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
