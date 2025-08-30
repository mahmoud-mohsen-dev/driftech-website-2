export interface SendOTPSuccessResponse {
  message: string;
  otp_code: number;
  user_id: number;
  error?: string;
}

export interface SendOTPErrorResponse {
  error:
    | {
        phone?: string[];
        isForgotPass?: string[];
      }
    | string;
}

export interface VerifyOTPSuccessResponse {
  message: string;
  user_id: number;
  error?: string;
}

export interface VerifyOTPErrorResponse {
  error:
    | {
        phone?: string[];
        otp_code?: string[];
      }
    | string;
}
