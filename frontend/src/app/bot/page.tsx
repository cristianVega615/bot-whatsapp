"use client";
import { useState, useEffect } from "react";
import { socketInitiazize } from "./utils-socket/socket";
import { blurQr } from "./image/blur.code";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function BotRoot() {
  const [Qr, setQr] = useState<string>("");
  useEffect(() => {
    const socket = socketInitiazize();
    socket.on("qr", (msg) => {
      setQr(`data:image/jpeg;base64,${msg}`);
    });

    return () => {};
  }, []);

  return (
    <>
    <div className="w-full p-6">
      <h1 className="text-5xl font-extrabold text-center">
        Bot con QR
      </h1>
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
    </main> 
    <Footer/>
    </>
  );
}
