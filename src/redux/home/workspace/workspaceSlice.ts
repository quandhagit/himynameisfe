import { DUMB_IMAGE_URL } from "@/constant/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dumbData = [
  {
    id: "1",
    startDate: "7/2023",
    endDate: "",
    company: "NCC Plus 1",
    role: "Frontend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: DUMB_IMAGE_URL,
  },
  {
    id: "2",
    startDate: "5/2022",
    endDate: "7/2023",
    company: "Rikkei soft 2",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: DUMB_IMAGE_URL,
  },
  {
    id: "3",
    startDate: "5/2021",
    endDate: "11/2021",
    company: "FPT soft 3",
    role: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: DUMB_IMAGE_URL,
  },
];

export type Workspace = {
  id: string;
  startDate: string;
  endDate: string;
  company: string;
  role: string;
  description: string;
  image: string;
};

type initialStateType = {
  workspaceList: Workspace[];
  selectedWorkspace: Workspace | null;
};

const initialState: initialStateType = {
  workspaceList: dumbData,
  selectedWorkspace: null,
};

export const workspaceSlice = createSlice({
  name: "workspaceSlice",
  initialState,
  reducers: {
    selectWorkspace: (
      state: initialStateType,
      action: PayloadAction<string>
    ) => {
      if (!action.payload) {
        return { ...state, selectedWorkspace: null };
      }
      const selectedWorkspace =
        state.workspaceList.find((w) => w.id === action.payload) || null;
      console.log(selectedWorkspace);
      return { ...state, selectedWorkspace: selectedWorkspace };
    },
  },
});

export const { selectWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;
