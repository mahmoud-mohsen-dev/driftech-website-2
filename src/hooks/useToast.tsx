// hooks/useToast.tsx
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return ctx;
};
