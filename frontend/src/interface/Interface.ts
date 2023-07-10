
export interface flowsObject {
  keyboard: string;
  answer: string;
}
export interface propsDialogWithoutSign {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


export type Props = {
  show?: propsDialogWithoutSign;
};

export interface ContextApp {
  authorization: boolean 
  type_auth: "without_sign" | "sign" | null
}

export interface ContextObject {
  value_state: ContextApp;
  func_change: React.Dispatch<React.SetStateAction<ContextApp>>
}



/**
 * Interfaces para el componente without sign
 */

export type PropsUserFromBot = {
  user: string
} 