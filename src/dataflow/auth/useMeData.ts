import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../store";
import { setCurrentUser } from "./meSlice";
import { User } from "@/models/home";

const useMeData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useAppSelector((state) => state.meSlice);

  const initCurrentUser = useCallback(
    (user: User) => {
      dispatch(setCurrentUser(user));
    },
    [dispatch]
  );

  return {
    user,
    initCurrentUser,
  };
};

export default useMeData;
