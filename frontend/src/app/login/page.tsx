"use client"

import Image from "next/image";
import {useState, useEffect} from 'react'
import DialongWithoutSign from "@/components/login/Dialog.without_sign";
import {useReturnContext} from '@/components/Context/ContextApp'

export default function Login() {
  const [showModal, setShowModal] = useState(false)
  const stateContext = useReturnContext();

  const showModalFunction = () => {
    setShowModal(!showModal)
  }

  console.log(stateContext)

  return (
    <div className="sm:w-10/12 flex items-center justify-center">
      <DialongWithoutSign show={{
        showModal,
        setShowModal
      }}/>
      <div className="flex justify-around items-center sm:w-[70%] w-[95%]">
        <Image

          src="/undraw_male_avatar.svg"
          alt="img-user-without-login"
          width={110}
          height={110}
        />
        <div className="sm:w-[75%] w-[70%]">
          <p className="text-xl ">
            Create un usuario sin tener que usar una cuenta
          </p>
          <div className="mt-2">
              <button onClick={showModalFunction} className="bg-indigo-900 p-2">Mira que tengo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
