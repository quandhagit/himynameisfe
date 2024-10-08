import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import workspaceSlice from "./home/workspace/workspaceSlice";
import projectSlice from "./home/project/projectSlice";
import meSlice from "./auth/meSlice";

export const store = configureStore({
  reducer: {
    meSlice,
    workspaceSlice,
    projectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
