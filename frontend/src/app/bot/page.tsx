"use client";
import { useState, useEffect, useRef } from "react";
import { socketInitiazize } from "../../utils/socket";
import { blurQr } from "./image/blur.code";
import Image from "next/image";
import Footer from "@/components/Footer";
import FormBot from "@/components/bot-components/FormBot";
import { url_dev } from "../../../config.url";
import { useReturnContext } from "@/components/Context/ContextApp";
import { ContextApp } from "@/interface/Interface";

export default function BotRoot() {
  const [Qr, setQr] = useState<string>("");
  const [flowsApper, setFlowsApper] = useState(false);
  const [user, setUser] = useState("");

  const { func_change, value_state } = useReturnContext();

  let set_cookie = async (): Promise<{
    auth: boolean;
    type: string;
  }> => {
    let responseJSON = await fetch(`${url_dev.backend_express}/bot-session`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
      },
      mode: "cors",
      credentials: "include",
    });

    let response = await responseJSON.json();
    return response;
  };
  const createflows = () => {
    setFlowsApper(!flowsApper);
  };

  useEffect(() => {
    const socket = socketInitiazize();

    socket.on("qr", (msg) => {
      setQr(`data:image/jpeg;base64,${msg}`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    set_cookie().then((response) => {
      if (!response.auth) {
        window.location.href = url_dev.url_page_main + "/login";
      }
    });

    return () => {};
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
          <div className="">{flowsApper && <FormBot user={user} />}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
