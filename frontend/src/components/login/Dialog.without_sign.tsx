"use client";

import React, { useRef, useState, useEffect } from "react";
import { useReturnContext } from "@/components/Context/ContextApp";
import { Props } from "@/interface/Interface";
import axios, {AxiosResponse} from "axios";
import { url_dev } from "../../../config.url";

const DialogWithoutSign: React.FC<Props> = (props) => {
  const $dialog = useRef<HTMLDialogElement>(null);
  const [user, setUser] = useState("");
  let { show } = props;

  useEffect(() => {
    const getAuth = async  () => {
     const data: AxiosResponse = await axios.get(url_dev.backend_express + "/bot-session", {
      withCredentials: true
     }
     );

     let awaitData: {
      user: string;
      auth: boolean;
     } = data.data;

    if (awaitData.auth) { 
      window.location.href = url_dev.url_page_main;
    }
    };

    getAuth()
    return () => {};
  }, []);

  if (show) {
    const { showModal, setShowModal } = show;
    if (
      showModal &&
      !(typeof $dialog.current?.getAttribute("open") === "string")
    ) {
      $dialog.current?.showModal();
    }
  }
  function hideDialog() {
    $dialog.current?.close();
    show?.setShowModal(false);
    setUser("");
  }

  const setUserFree = async () => {
    let correct = await axios.post(
      url_dev.backend_express + "/bot-session",
      {
        user: `user-${user}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    $dialog.current?.close();
    if (correct) {
      window.location.href = url_dev.url_page_main;
    }
  };

  return (
    <dialog ref={$dialog} className="sm:max-w-sm">
      <div>
        <p>
          Puede usar algunos nombres que guste, este guardará una pequeña
          sesión, (No guarda tus flujos que creas, pero puedes descargarlo
          luego.)
        </p>
        <span>user-</span>{" "}
        <input
          type="text"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </div>
      <button onClick={hideDialog}>Cerrar</button>
      <button onClick={setUserFree}>Enviar</button>
    </dialog>
  );
};

export default DialogWithoutSign;
