"use client"

import React, { createContext, useState, useContext } from "react";
import {
  ContextApp as ContextInterface,
  ContextObject,
} from "../../interface/Interface";

const App = createContext<ContextObject>({
    value_state : {
        authorization: false,
        type_auth: null
    } , 
    func_change: () => {} 
});
function ContextApp({
  children,
}: {
  children: React.ReactNode;
}) {
  const [context_app, setContext_app] = useState<ContextInterface>({
    authorization: false,
    type_auth: null,
  });

  return (
    <App.Provider
      value={{
        value_state: context_app,
        func_change: setContext_app,
      }}
    >
      {children}
    </App.Provider>
  );
}

const  useReturnContext = () => {
    const context = useContext(App)
    return context;
}




export { createContext, ContextApp, useReturnContext };
