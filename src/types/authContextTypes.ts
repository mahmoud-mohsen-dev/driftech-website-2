export type AuthType = {
  userEmail: string;
  accessToken: string | null;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};
