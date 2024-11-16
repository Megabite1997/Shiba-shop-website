import axiosInstance from "./axiosInstance";

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`/user/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (token: string) => {
  try {
    const response = await axiosInstance.get(`/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
