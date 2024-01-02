import { ReactNode } from "react";

 export interface ModalProps {
    isOpen: boolean;
    onClick: () => void;
    children: ReactNode;


  }