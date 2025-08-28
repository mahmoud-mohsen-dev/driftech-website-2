import { createContext } from "react";

type ToastContextType = {
  success: (text: string) => void;
  error: (text: string) => void;
  warning: (text: string) => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);
