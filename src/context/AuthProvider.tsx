import { useState } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthType } from "../types/authContextTypes";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthType>({
    userEmail: "",
    accessToken: null,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
