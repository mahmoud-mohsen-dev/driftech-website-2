export type AuthType = {
  userPhoneNumber: string;
  accessToken: string | null;
  // otpCode: number | null;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};
