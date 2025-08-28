import { useState } from "react";
import type { AuthType } from "../types/authContextTypes";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState<AuthType>({
    userPhoneNumber: "",
    otpCode: null,
    accessToken: null,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
