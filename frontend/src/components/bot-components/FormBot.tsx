"use client";
import { type flowsObject } from "@/interface/Interface";
import { useRef } from "react";
import {socketInitiazize} from '@/utils/socket'
import {PropsUserFromBot} from '@/interface/Interface'

export default function FormBot(Props: PropsUserFromBot) {
  const inputOne = useRef<HTMLInputElement>(null)
  const inputTwo = useRef<HTMLInputElement>(null)
  // const inputThree = useRef<HTMLInputElement>(null)
  let {user} = Props;


  const getValueInputs = () => {
    if (inputOne.current && inputTwo.current) {
      const socket = socketInitiazize()

        let object =  {
          keyword: inputOne.current.value,
          answer: inputTwo.current.value,
          user: user
        }
        console.log(object)
        socket.emit("flows",object)
      inputOne.current.value = ""
      inputTwo.current.value = ""
     
    }
  }


  return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className="w-max">
        <span className="px-2">Keyword:</span>
        <input
          ref={inputOne}
          type="text"
          className="border-blue-200 border-solid border-2 focus:ring-blue-500 focus:border-blue-800 rounded-md bg-inherit"
        />
      </div>

      <div className="w-max">
        <span className="px-2">Answer:</span>
        <input 
          ref={inputTwo}
          type="text"
          className="border-blue-200 border-solid border-2 focus:ring-blue-500 focus:border-blue-800 rounded-md bg-inherit"
        />
      </div>
      <div className="w-max">
        <button onClick={getValueInputs}
          className="border-blue-200 border-solid border-2 focus:ring-blue-500 focus:border-blue-800 rounded-md bg-inherit"
        >Enviar el flow</button>
      </div>
    </div>
  );
}
