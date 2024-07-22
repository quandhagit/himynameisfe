"use client";

import useAxiosAuth from "@/config/axios/useAxiosAuth";
import { User } from "@/models/home";
import { UseMutationResult, useMutation } from "@tanstack/react-query";

export type UserRegisterInputType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phoneNumber?: string;
  avatar?: string;
  country?: string;
  city?: string;
  address?: string;
};

export const useUserRegisterMutation = (): UseMutationResult<
  User,
  Error,
  UserRegisterInputType,
  unknown
> => {
  const apiAuth = useAxiosAuth();
  return useMutation({
    mutationKey: ["userRegister"],
    mutationFn: (data: UserRegisterInputType) =>
      apiAuth.post("/auth/register", data),
  });
};
