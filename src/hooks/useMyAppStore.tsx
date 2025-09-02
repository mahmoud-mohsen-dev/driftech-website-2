import { useContext } from "react";
import { MyAppStoreContext } from "../context/MyAppStoreContext";

export const useMyAppStore = () => {
  const context = useContext(MyAppStoreContext);

  if (!context) {
    throw new Error("useMyAppStore must be used within a MyProvider");
  }

  return context;
};
