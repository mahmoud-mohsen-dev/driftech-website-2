export type AuthType = {
  tempUserPhoneNumber: string;
  user: UserDataType | null;
  // accessToken: string | null;
  // otpCode: number | null;
};

export type AuthContextType = {
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
  login(userPhoneNumber: string, password: string): Promise<boolean | null>;
  completeUserProfileRegister: ({
    userId,
    name,
    email,
    password,
    passwordConfirmation,
  }: {
    userId: number | null;
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
  }) => Promise<boolean | null>;
};

export type UserDataType = {
  id?: number | null;
  phone?: string;
  otp_code?: string;
  name?: string;
  email?: string;
  updated_profile?: string;
  gender?: string | null;
  date_of_birth?: string | null;
  created_at?: string;
  updated_at?: string;
  fcm_token?: string | null;
  completed_registration?: string;
  deleted_at?: string | null;
  is_verified?: string;
  wallet?: string;
};

export type SigninSuccessResponseType = {
  message: string;
  token: string;
  user: UserDataType;

  error?: string;
};

export type SigninErrorResponseType = {
  error: string;
};
