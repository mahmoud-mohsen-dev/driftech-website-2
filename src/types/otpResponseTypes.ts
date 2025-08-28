export interface OTPSuccessResponse {
  message: string;
  otp_code: number;
  user_id: number;
  error?: string;
}

export interface OTPErrorResponse {
  error: {
    phone?: string[];
    isForgotPass?: string[];
  };
}
