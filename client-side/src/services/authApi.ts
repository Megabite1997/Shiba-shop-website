import axiosInstance from "./axiosInstance";
import {
  ForgotPasswordResponse,
  LoginResponse,
  RegisterResponse,
  UserProfileResponse,
} from "./types";

export const registerUser = async (userData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<RegisterResponse> => {
  const response = await axiosInstance.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (data: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axiosInstance.post(`/auth/login`, data);
  return response.data;
};

export const getUserProfile = async (
  token: string,
): Promise<UserProfileResponse> => {
  const response = await axiosInstance.get(`/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const forgotPassword = async (
  email: string,
): Promise<ForgotPasswordResponse> => {
  const response = await axiosInstance.post<ForgotPasswordResponse>(
    "/auth/forgot-password",
    { email },
  );
  return response.data;
};
