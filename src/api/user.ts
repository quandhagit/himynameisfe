"use client";

import useAxiosAuth from "@/config/axios/useAxiosAuth";
import { User } from "@/models/home";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useUserQuery = (
  userId: string | undefined
): UseQueryResult<User, Error> => {
  const apiAuth = useAxiosAuth();
  return useQuery({
    queryKey: ["currentUserQuery", userId],
    queryFn: async () => (await apiAuth.get(`/user/${userId}`)).data,
    enabled: !!userId,
  });
};
