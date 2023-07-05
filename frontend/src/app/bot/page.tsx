"use client";
import { useState, useEffect, useRef } from "react";
import { socketInitiazize } from "./utils/socket";
import { blurQr } from "./image/blur.code";
import { obtenerValor, guardarValor_Exp } from "./utils/toke.user";
import Image from "next/image";
import Footer from "@/components/Footer";
import FormBot from "@/components/bot-components/FormBot";
import { url_dev } from "../../../config.url";

export default function BotRoot() {
  const [Qr, setQr] = useState<string>("");
  const [flowsApper, setFlowsApper] = useState(false);
  let timerRef = useRef<any>(null);

  const createflows = () => {
    setFlowsApper(!flowsApper);
  };

  useEffect(() => {
    const socket = socketInitiazize();
    socket.on("qr", (msg) => {
      setQr(`data:image/jpeg;base64,${msg}`);
    });

    const set_cookie = async (data: any) => {
      console.log(data)
      await fetch(`${url_dev.backend_express}/bot-session`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "http://localhost:3200",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
        },
        mode: "cors",
        body: JSON.stringify({
          data
        }),
      });
    };
    const userFree = obtenerValor("user");
    if (!userFree) {
      guardarValor_Exp("user", `user-${crypto.randomUUID()}`, 72);
      set_cookie(userFree);
    }
    // console.log(userFree);
    set_cookie(userFree);
    timerRef.current = setTimeout(() => {
      obtenerValor("user");
    }, 72 * 60 * 1000);

    return () => {
      socket.disconnect();
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
          <div className="">{flowsApper && <FormBot />}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
